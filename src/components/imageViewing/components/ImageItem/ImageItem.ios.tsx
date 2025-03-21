import React, { memo, useCallback, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ImageURISource,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import useDoubleTapToZoom from "../../hooks/useDoubleTapToZoom";
import useImageDimensions from "../../hooks/useImageDimensions";
import { getImageStyles, getImageTransform } from "../../utils";
import { ImageLoading } from "./ImageLoading";

const SWIPE_CLOSE_OFFSET = 130;
const SWIPE_CLOSE_VELOCITY = 1.75;
const SCREEN = Dimensions.get("screen");
const SCREEN_WIDTH = SCREEN.width;
const SCREEN_HEIGHT = SCREEN.height;

type Props = {
  imageSrc: ImageURISource;
  onRequestClose: () => void;
  onZoom: (scaled: boolean) => void;
  onLongPress: (image: ImageURISource) => void;
  delayLongPress: number;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
  swipeCloseOffset?: number;
  swipeCloseVelocity?: number;
};

const ImageItem = memo(
  ({
    imageSrc,
    onZoom,
    onRequestClose,
    onLongPress,
    delayLongPress,
    swipeToCloseEnabled = true,
    doubleTapToZoomEnabled = true,
    swipeCloseOffset = SWIPE_CLOSE_OFFSET,
    swipeCloseVelocity = SWIPE_CLOSE_VELOCITY,
  }: Props) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [loaded, setLoaded] = useState(false);
    const [scaled, setScaled] = useState(false);
    const imageDimensions = useImageDimensions(imageSrc);
    const handleDoubleTap = useDoubleTapToZoom(scrollViewRef, scaled, SCREEN);

    const [translate, scale] = getImageTransform(imageDimensions, SCREEN);
    const scrollValueY = new Animated.Value(0);
    const scaleValue = new Animated.Value(scale || 1);
    const translateValue = new Animated.ValueXY(translate);
    const maxScale = scale && scale > 0 ? Math.max(1 / scale, 1) : 1;

    const imageOpacity = scrollValueY.interpolate({
      inputRange: [-SWIPE_CLOSE_OFFSET, 0, SWIPE_CLOSE_OFFSET],
      outputRange: [0.5, 1, 0.5],
    });
    const imagesStyles = getImageStyles(
      imageDimensions,
      translateValue,
      scaleValue,
    );
    const imageStylesWithOpacity = { ...imagesStyles, opacity: imageOpacity };

    const onScrollEndDrag = useCallback(
      ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const velocityY = nativeEvent?.velocity?.y ?? 0;
        const offsetY = nativeEvent?.contentOffset?.y ?? 0;
        const _scaled = nativeEvent?.zoomScale > 1;

        onZoom(_scaled);
        setScaled(_scaled);

        if (
          !_scaled &&
          ((swipeToCloseEnabled && Math.abs(velocityY) > swipeCloseVelocity) ||
            Math.abs(offsetY) > swipeCloseOffset ||
            Math.abs(offsetY) > SCREEN_HEIGHT / 2)
        ) {
          onRequestClose();
        }
      },
      [
        onRequestClose,
        onZoom,
        swipeCloseOffset,
        swipeCloseVelocity,
        swipeToCloseEnabled,
      ],
    );

    const onScroll = ({
      nativeEvent,
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = nativeEvent?.contentOffset?.y ?? 0;

      if (nativeEvent?.zoomScale > 1) {
        return;
      }

      scrollValueY.setValue(offsetY);
    };

    const onLongPressHandler = useCallback(() => {
      onLongPress(imageSrc);
    }, [imageSrc, onLongPress]);

    return (
      <View>
        <ScrollView
          ref={scrollViewRef}
          style={styles.listItem}
          pinchGestureEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          maximumZoomScale={maxScale}
          contentContainerStyle={styles.imageScrollContainer}
          scrollEnabled={swipeToCloseEnabled}
          onScrollEndDrag={onScrollEndDrag}
          scrollEventThrottle={1}
          {...(swipeToCloseEnabled && {
            onScroll,
          })}
        >
          {(!loaded || !imageDimensions) && <ImageLoading />}
          <TouchableWithoutFeedback
            onPress={doubleTapToZoomEnabled ? handleDoubleTap : undefined}
            onLongPress={onLongPressHandler}
            delayLongPress={delayLongPress}
          >
            <Animated.Image
              source={imageSrc}
              style={imageStylesWithOpacity}
              onLoad={() => setLoaded(true)}
            />
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  listItem: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  imageScrollContainer: {
    height: SCREEN_HEIGHT,
  },
});

export default ImageItem;
