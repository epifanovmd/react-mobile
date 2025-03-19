import React, { useCallback } from "react";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  ScrollView,
} from "react-native";

import { Dimensions } from "../types";

const DOUBLE_TAP_DELAY = 300;
let lastTapTS: number | null = null;

function useDoubleTapToZoom(
  scrollViewRef: React.RefObject<ScrollView | null>,
  scaled: boolean,
  screen: Dimensions,
) {
  return useCallback(
    (event: NativeSyntheticEvent<NativeTouchEvent>) => {
      const nowTS = new Date().getTime();
      const scrollResponderRef = scrollViewRef?.current?.getScrollResponder();

      if (lastTapTS && nowTS - lastTapTS < DOUBLE_TAP_DELAY) {
        const { pageX, pageY } = event.nativeEvent;
        let targetX = 0;
        let targetY = 0;
        let targetWidth = screen.width;
        let targetHeight = screen.height;

        // Zooming in
        // TODO: Add more precise calculation of targetX, targetY based on touch
        if (!scaled) {
          targetX = pageX / 2;
          targetY = pageY / 2;
          targetWidth = screen.width / 2;
          targetHeight = screen.height / 2;
        }

        scrollResponderRef?.scrollResponderZoomTo({
          x: targetX,
          y: targetY,
          width: targetWidth,
          height: targetHeight,
          animated: true,
        });
      } else {
        lastTapTS = nowTS;
      }
    },
    [scaled, screen.height, screen.width, scrollViewRef],
  );
}

export default useDoubleTapToZoom;
