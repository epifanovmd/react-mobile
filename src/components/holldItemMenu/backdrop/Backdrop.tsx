import { BlurView } from "@react-native-community/blur";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { useHoldItemContext } from "../hooks";
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_TRANSFORM_DURATION,
  WINDOW_HEIGHT,
} from "../utils/constants";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export const Backdrop = memo(() => {
  const { state } = useHoldItemContext();

  const tapGesture = Gesture.Tap().onStart(() => {
    if (state.value === CONTEXT_MENU_STATE.ACTIVE) {
      state.value = CONTEXT_MENU_STATE.END;
    }
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    const topValueAnimation =
      state.value === CONTEXT_MENU_STATE.ACTIVE
        ? 0
        : withDelay(
            HOLD_ITEM_TRANSFORM_DURATION,
            withTiming(WINDOW_HEIGHT, {
              duration: 0,
            }),
          );

    const opacityValueAnimation = withTiming(
      state.value === CONTEXT_MENU_STATE.ACTIVE ? 1 : 0,
      {
        duration: HOLD_ITEM_TRANSFORM_DURATION,
      },
    );

    return {
      top: topValueAnimation,
      opacity: opacityValueAnimation,
    };
  });

  return (
    <GestureDetector gesture={tapGesture}>
      <AnimatedBlurView style={[styles.container, animatedContainerStyle]}>
        <Animated.View style={StyleSheet.absoluteFillObject} />
      </AnimatedBlurView>
    </GestureDetector>
  );
});

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
});
