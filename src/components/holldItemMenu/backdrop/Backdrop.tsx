import { BlurView } from '@react-native-community/blur';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_TRANSFORM_DURATION,
  WINDOW_HEIGHT,
} from '../utils/constants';
import { useHoldItemContext } from '../hooks';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

type Context = {
  startPosition: {
    x: number;
    y: number;
  };
};

export const Backdrop = memo(() => {
  const { state } = useHoldItemContext();

  const tapGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent,
    Context
  >(
    {
      onStart: (event, context) => {
        context.startPosition = { x: event.x, y: event.y };
      },
      onCancel: () => {
        state.value = CONTEXT_MENU_STATE.END;
      },
      onEnd: (event, context) => {
        const distance = Math.hypot(
          event.x - context.startPosition.x,
          event.y - context.startPosition.y,
        );
        const shouldClose = distance < 10;
        const isStateActive = state.value === CONTEXT_MENU_STATE.ACTIVE;

        if (shouldClose && isStateActive) {
          state.value = CONTEXT_MENU_STATE.END;
        }
      },
    },
    [state],
  );

  const animatedContainerStyle = useAnimatedStyle(() => {
    const topValueAnimation = () =>
      state.value === CONTEXT_MENU_STATE.ACTIVE
        ? 0
        : withDelay(
            HOLD_ITEM_TRANSFORM_DURATION,
            withTiming(WINDOW_HEIGHT, {
              duration: 0,
            }),
          );

    const opacityValueAnimation = () =>
      withTiming(state.value === CONTEXT_MENU_STATE.ACTIVE ? 1 : 0, {
        duration: HOLD_ITEM_TRANSFORM_DURATION,
      });

    return {
      top: topValueAnimation(),
      opacity: opacityValueAnimation(),
    };
  });

  return (
    <TapGestureHandler onHandlerStateChange={tapGestureEvent}>
      <AnimatedBlurView style={[styles.container, animatedContainerStyle]}>
        <Animated.View style={StyleSheet.absoluteFillObject} />
      </AnimatedBlurView>
    </TapGestureHandler>
  );
});

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
});
