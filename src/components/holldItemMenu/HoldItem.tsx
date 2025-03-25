import React, { memo, PropsWithChildren } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { HapticFeedbackTypes, trigger } from "react-native-haptic-feedback";
import Animated, {
  measure,
  MeasuredDimensions,
  runOnJS,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { HoldMenuItemProp } from "./holdMenu";
import { useHoldItemContext } from "./hooks";
import { IHoldPosition } from "./types";
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_DURATION,
  HOLD_ITEM_SCALE_DOWN_DURATION,
  HOLD_ITEM_SCALE_DOWN_VALUE,
} from "./utils";

export interface HoldItemProps<T = unknown> extends TouchableOpacityProps {
  data?: T;
  menu?: HoldMenuItemProp<T>[];

  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  longPressMinDurationMs?: number;
  disablePresAnimation?: boolean;
  closeOnDown?: boolean;
  content?: React.ReactNode;
  targetPositions?: IHoldPosition;
  animationDuration?: number;
  scaleDuration?: number;
}

const _HoldItem = <T extends any>({
  data,
  menu,
  style,
  disabled,
  longPressMinDurationMs = HOLD_ITEM_SCALE_DOWN_DURATION,
  disablePresAnimation,
  closeOnDown,
  children,
  content = children,
  targetPositions,
  animationDuration,
  scaleDuration = HOLD_ITEM_SCALE_DOWN_DURATION,
  ...rest
}: PropsWithChildren<HoldItemProps<T>>) => {
  const { state, setValue, duration: _duration } = useHoldItemContext();

  const isActive = useSharedValue<boolean>(false);
  const itemScale = useSharedValue<number>(1);
  const measured = useSharedValue<MeasuredDimensions | null>(null);

  const containerRef = useAnimatedRef<Animated.View>();
  const duration = animationDuration ?? _duration;

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      flexShrink: 1,
      opacity: isActive.value
        ? 0
        : withDelay(duration - 100, withTiming(1, { duration: 0 })),
      transform: [
        {
          scale: withTiming(itemScale.value, {
            duration: scaleDuration,
          }),
        },
      ],
    };
  });

  const onActivate = (measured: MeasuredDimensions) => {
    trigger(HapticFeedbackTypes.impactLight);

    setValue({
      menu,
      measured,
      data,
      content,
      targetPositions,
      duration,
      onClose: () => {
        isActive.value = false;
      },
    });
  };

  const gesture = Gesture.LongPress()
    .minDuration(longPressMinDurationMs)
    .enabled(!disabled)
    .onBegin(() => {
      measured.value = measure(containerRef);
      itemScale.value = HOLD_ITEM_SCALE_DOWN_VALUE;
    })
    .onStart(() => {
      if (measured.value) {
        runOnJS(onActivate)(measured.value);
        itemScale.value = 1;
        isActive.value = true;
      }
    })
    .onFinalize((_event, success) => {
      if (closeOnDown && success) {
        state.value = CONTEXT_MENU_STATE.END;
      }
      itemScale.value = 1;
    });

  return (
    <TouchableOpacity
      style={[styles.touchable, style]}
      activeOpacity={0.8}
      {...rest}
    >
      <GestureDetector gesture={gesture}>
        {disablePresAnimation ? (
          <View ref={containerRef}>{children}</View>
        ) : (
          <Animated.View ref={containerRef} style={animatedContainerStyle}>
            {children}
          </Animated.View>
        )}
      </GestureDetector>
    </TouchableOpacity>
  );
};

export const HoldItem = memo(_HoldItem) as typeof _HoldItem;

const styles = StyleSheet.create({
  touchable: { flexShrink: 1 },
  holdItem: {
    zIndex: 10,
    position: "absolute",
  },
  portalOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 15,
  },
});
