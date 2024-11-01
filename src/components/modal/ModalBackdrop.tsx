import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { memo, useMemo } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { useBottomSheetGestureHandlers, useBottomSheetInternal } from "./hooks";

export const ModalBackdrop = memo(
  ({ animatedIndex, style }: BottomSheetBackdropProps) => {
    const { handlePanGestureHandler } = useBottomSheetGestureHandlers();

    const {
      activeOffsetX,
      activeOffsetY,
      failOffsetX,
      failOffsetY,
      waitFor,
      simultaneousHandlers,
    } = useBottomSheetInternal();

    const panGesture = useMemo(() => {
      let gesture = Gesture.Pan()
        .enabled(true)
        .shouldCancelWhenOutside(false)
        .runOnJS(false)
        .onStart(handlePanGestureHandler.handleOnStart)
        .onChange(handlePanGestureHandler.handleOnChange)
        .onEnd(handlePanGestureHandler.handleOnEnd)
        .onFinalize(handlePanGestureHandler.handleOnFinalize);

      if (waitFor) {
        gesture = gesture.requireExternalGestureToFail(waitFor);
      }

      if (simultaneousHandlers) {
        gesture = gesture.simultaneousWithExternalGesture(
          simultaneousHandlers as never,
        );
      }

      if (activeOffsetX) {
        gesture = gesture.activeOffsetX(activeOffsetX);
      }

      if (activeOffsetY) {
        gesture = gesture.activeOffsetY(activeOffsetY);
      }

      if (failOffsetX) {
        gesture = gesture.failOffsetX(failOffsetX);
      }

      if (failOffsetY) {
        gesture = gesture.failOffsetY(failOffsetY);
      }

      return gesture;
    }, [
      activeOffsetX,
      activeOffsetY,
      failOffsetX,
      failOffsetY,
      simultaneousHandlers,
      waitFor,
      handlePanGestureHandler.handleOnChange,
      handlePanGestureHandler.handleOnEnd,
      handlePanGestureHandler.handleOnFinalize,
      handlePanGestureHandler.handleOnStart,
    ]);

    // animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(
        animatedIndex.value,
        [-1, 0, 1],
        [0, 0.5, 0.5],
        Extrapolation.CLAMP,
      ),
    }));

    // styles
    const containerStyle = useMemo(
      () => [
        style,
        {
          backgroundColor: "#000",
        },
        containerAnimatedStyle,
      ],
      [style, containerAnimatedStyle],
    );

    return (
      <GestureDetector gesture={panGesture}>
        <Animated.View style={containerStyle} />
      </GestureDetector>
    );
  },
);
