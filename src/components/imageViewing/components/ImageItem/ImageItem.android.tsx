import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ImageURISource,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
} from "react-native";

import useImageDimensions from "../../hooks/useImageDimensions";
import usePanResponder from "../../hooks/usePanResponder";
import { getImageStyles, getImageTransform } from "../../utils";
import { ImageLoading } from "./ImageLoading";

const SWIPE_CLOSE_OFFSET = 130;
const SWIPE_CLOSE_VELOCITY = 1.75;
const SCREEN = Dimensions.get("window");
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
    const imageDimensions = useImageDimensions(imageSrc);
    const [translate, scale] = getImageTransform(imageDimensions, SCREEN);
    const scrollValueY = new Animated.Value(0);
    const [isLoaded, setLoadEnd] = useState(false);

    useEffect(() => {
      scrollViewRef.current?.scrollTo({ y: SCREEN_HEIGHT, animated: false });
    }, []);

    const onLoaded = useCallback(() => setLoadEnd(true), []);
    const onZoomPerformed = useCallback(
      (isZoomed: boolean) => {
        onZoom(isZoomed);
        if (scrollViewRef?.current) {
          scrollViewRef.current.setNativeProps({
            scrollEnabled: !isZoomed,
          });
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [scrollViewRef],
    );

    const onLongPressHandler = useCallback(() => {
      onLongPress(imageSrc);
    }, [imageSrc, onLongPress]);

    const [panHandlers, scaleValue, translateValue] = usePanResponder({
      initialScale: scale || 1,
      initialTranslate: translate || { x: 0, y: 0 },
      onZoom: onZoomPerformed,
      doubleTapToZoomEnabled,
      onLongPress: onLongPressHandler,
      delayLongPress,
    });

    const imagesStyles = getImageStyles(
      imageDimensions,
      translateValue,
      scaleValue,
    );
    const imageOpacity = scrollValueY.interpolate({
      inputRange: [
        -swipeCloseOffset + SCREEN_HEIGHT,
        SCREEN_HEIGHT,
        swipeCloseOffset + SCREEN_HEIGHT,
      ],
      outputRange: [0.7, 1, 0.7],
    });
    const imageStylesWithOpacity = { ...imagesStyles, opacity: imageOpacity };

    const onScrollEndDrag = ({
      nativeEvent,
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      const velocityY = nativeEvent?.velocity?.y ?? 0;
      const offsetY = nativeEvent?.contentOffset?.y ?? 0;

      if (
        Math.abs(velocityY) > swipeCloseVelocity ||
        Math.abs(offsetY - SCREEN_HEIGHT) > swipeCloseOffset ||
        Math.abs(offsetY - SCREEN_HEIGHT) > SCREEN_HEIGHT / 2
      ) {
        onRequestClose();
      }
    };

    const onScroll = ({
      nativeEvent,
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = nativeEvent?.contentOffset?.y ?? 0;

      scrollValueY.setValue(offsetY);
    };

    return (
      <ScrollView
        ref={scrollViewRef}
        style={styles.listItem}
        pagingEnabled
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.imageScrollContainer}
        scrollEnabled={swipeToCloseEnabled}
        {...(swipeToCloseEnabled && {
          onScroll,
          onScrollEndDrag,
        })}
      >
        <Animated.Image
          {...panHandlers}
          source={imageSrc}
          style={imageStylesWithOpacity}
          onLoad={onLoaded}
        />
        {(!isLoaded || !imageDimensions) && <ImageLoading />}
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  listItem: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  imageScrollContainer: {
    paddingTop: SCREEN_HEIGHT,
    height: SCREEN_HEIGHT * 3,
  },
});

export default ImageItem;
