import React, { memo, PropsWithChildren, useCallback, useMemo } from "react";
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
}

const _HoldItem = <T extends any>({
  data,
  menu,
  style,
  disabled,
  longPressMinDurationMs = 150,
  disablePresAnimation,
  closeOnDown,
  children,
  content = children,
  ...rest
}: PropsWithChildren<HoldItemProps<T>>) => {
  const { state, setValue } = useHoldItemContext();

  const isActive = useSharedValue<boolean>(false);
  const itemScale = useSharedValue<number>(1);
  const measured = useSharedValue<MeasuredDimensions | null>(null);

  const containerRef = useAnimatedRef<Animated.View>();

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      flexShrink: 1,
      opacity: isActive.value
        ? 0
        : withDelay(HOLD_ITEM_DURATION - 50, withTiming(1, { duration: 0 })),
      transform: [
        {
          scale: isActive.value
            ? withTiming(1, { duration: HOLD_ITEM_DURATION })
            : itemScale.value,
        },
      ],
    };
  });

  const onActivate = useCallback(
    (measured: MeasuredDimensions) => {
      trigger(HapticFeedbackTypes.impactLight);

      setValue({
        menu,
        measured,
        data,
        content,
        onClose: () => {
          isActive.value = false;
        },
      });
    },
    [setValue, menu, data, content, isActive],
  );

  const gesture = useMemo(
    () =>
      Gesture.LongPress()
        .minDuration(longPressMinDurationMs)
        .enabled(!disabled)
        .onBegin(() => {
          measured.value = measure(containerRef);

          itemScale.value = withTiming(HOLD_ITEM_SCALE_DOWN_VALUE, {
            duration: HOLD_ITEM_SCALE_DOWN_DURATION,
          });
        })
        .onStart(() => {
          if (measured.value) {
            runOnJS(onActivate)(measured.value);
            isActive.value = true;
          }
        })
        .onFinalize((_event, success) => {
          if (closeOnDown && success) {
            state.value = CONTEXT_MENU_STATE.END;
          }
          itemScale.value = withTiming(1, {
            duration: HOLD_ITEM_DURATION / 2,
          });
        }),
    [
      closeOnDown,
      containerRef,
      disabled,
      isActive,
      itemScale,
      longPressMinDurationMs,
      measured,
      onActivate,
      state,
    ],
  );

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
