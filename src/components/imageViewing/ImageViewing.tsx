import React, {
  ComponentType,
  FC,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  Animated,
  Dimensions,
  ImageURISource,
  ListRenderItemInfo,
  Modal,
  ModalProps,
  StyleSheet,
  View,
  VirtualizedList,
} from "react-native";

import { ImageDefaultHeader } from "./components/ImageDefaultHeader";
import ImageItem from "./components/ImageItem/ImageItem";
import { useAnimatedComponents } from "./hooks/useAnimatedComponents";
import { useImageIndexChange } from "./hooks/useImageIndexChange";
import { useRequestClose } from "./hooks/useRequestClose";

const DEFAULT_ANIMATION_TYPE = "fade";
const DEFAULT_BG_COLOR = "#000";
const DEFAULT_DELAY_LONG_PRESS = 800;
const SCREEN = Dimensions.get("screen");
const SCREEN_WIDTH = SCREEN.width;

export interface ImageViewingProps {
  images: ImageURISource[];
  keyExtractor?: (imageSrc: ImageURISource, index: number) => string;
  imageIndex: number;
  visible: boolean;
  onRequestClose: () => void;
  onLongPress?: (image: ImageURISource) => void;
  onImageIndexChange?: (imageIndex: number) => void;
  animationType?: ModalProps["animationType"];
  backgroundColor?: string;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
  delayLongPress?: number;
  HeaderComponent?: ComponentType<{ imageIndex: number; onClose?: () => void }>;
  FooterComponent?: ComponentType<{ imageIndex: number; onClose?: () => void }>;
  swipeCloseOffset?: number;
  swipeCloseVelocity?: number;
}

export const ImageViewing: FC<ImageViewingProps> = ({
  images,
  keyExtractor,
  imageIndex,
  visible,
  onRequestClose,
  onLongPress = () => {},
  onImageIndexChange,
  animationType = DEFAULT_ANIMATION_TYPE,
  backgroundColor = DEFAULT_BG_COLOR,
  swipeToCloseEnabled,
  doubleTapToZoomEnabled,
  delayLongPress = DEFAULT_DELAY_LONG_PRESS,
  HeaderComponent,
  FooterComponent,
  swipeCloseOffset,
  swipeCloseVelocity,
}) => {
  const imageList = useRef<VirtualizedList<ImageURISource>>(null);
  const [opacity, onRequestCloseEnhanced] = useRequestClose(onRequestClose);
  const [currentImageIndex, onScroll] = useImageIndexChange(imageIndex, SCREEN);
  const [headerTransform, footerTransform, toggleBarsVisible] =
    useAnimatedComponents();

  useEffect(() => {
    if (onImageIndexChange) {
      onImageIndexChange(currentImageIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);

  const onZoom = useCallback(
    (isScaled: boolean) => {
      imageList?.current
        ?.getScrollRef()
        ?.setNativeProps({ scrollEnabled: !isScaled });
      toggleBarsVisible(!isScaled);
    },
    [toggleBarsVisible],
  );

  const _keyExtractor = useCallback(
    (imageSrc: ImageURISource, index: number): string =>
      (keyExtractor ? keyExtractor(imageSrc, index) : imageSrc.uri) ??
      index.toString(),
    [keyExtractor],
  );

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: SCREEN_WIDTH,
      offset: SCREEN_WIDTH * index,
      index,
    }),
    [],
  );

  const getItem = useCallback(
    (_: ImageURISource, index: number) => images[index],
    [images],
  );

  const getItemCount = useCallback(() => images.length, [images]);

  const renderItem = useCallback(
    ({ item: imageSrc }: ListRenderItemInfo<ImageURISource>) => (
      <ImageItem
        onZoom={onZoom}
        imageSrc={imageSrc}
        onRequestClose={onRequestCloseEnhanced}
        onLongPress={onLongPress}
        delayLongPress={delayLongPress}
        swipeToCloseEnabled={swipeToCloseEnabled}
        doubleTapToZoomEnabled={doubleTapToZoomEnabled}
        swipeCloseOffset={swipeCloseOffset}
        swipeCloseVelocity={swipeCloseVelocity}
      />
    ),
    [
      delayLongPress,
      doubleTapToZoomEnabled,
      onLongPress,
      onRequestCloseEnhanced,
      onZoom,
      swipeCloseOffset,
      swipeCloseVelocity,
      swipeToCloseEnabled,
    ],
  );

  if (!visible) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      presentationStyle={"fullScreen"}
      animationType={animationType}
      onRequestClose={onRequestCloseEnhanced}
      supportedOrientations={["portrait"]}
      hardwareAccelerated
    >
      <View style={[s.container, { opacity, backgroundColor }]}>
        <Animated.View style={[s.header, { transform: headerTransform }]}>
          {typeof HeaderComponent !== "undefined" ? (
            React.createElement(HeaderComponent, {
              imageIndex: currentImageIndex,
              onClose: onRequestCloseEnhanced,
            })
          ) : (
            <ImageDefaultHeader onRequestClose={onRequestCloseEnhanced} />
          )}
        </Animated.View>
        <VirtualizedList
          ref={imageList}
          data={images}
          horizontal
          pagingEnabled
          windowSize={2}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          initialScrollIndex={imageIndex}
          getItem={getItem}
          getItemCount={getItemCount}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
          onMomentumScrollEnd={onScroll}
          keyExtractor={_keyExtractor}
        />
        {typeof FooterComponent !== "undefined" && (
          <Animated.View style={[s.footer, { transform: footerTransform }]}>
            {React.createElement(FooterComponent, {
              imageIndex: currentImageIndex,
              onClose: onRequestCloseEnhanced,
            })}
          </Animated.View>
        )}
      </View>
    </Modal>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    top: 0,
  },
  footer: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    bottom: 0,
  },
});
