import { Portal } from "@gorhom/portal";
import { isEqual } from "lodash";
import { nanoid } from "nanoid/non-secure";
import React, {
  memo,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { HapticFeedbackTypes, trigger } from "react-native-haptic-feedback";
import Animated, {
  measure,
  runOnJS,
  useAnimatedProps,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { HoldMenuItemProp } from "./holdMenu/types";
import { useDeviceOrientation, useHoldItemContext } from "./hooks";
import {
  calculateMenuHeight,
  getTransformOrigin,
  TransformOriginAnchorPosition,
} from "./utils/calculations";
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_SCALE_DOWN_DURATION,
  HOLD_ITEM_SCALE_DOWN_VALUE,
  HOLD_ITEM_TRANSFORM_DURATION,
  IS_IOS,
  SPRING_CONFIGURATION,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "./utils/constants";

export interface HoldItemProps<T = unknown> extends TouchableOpacityProps {
  data?: T;
  items: HoldMenuItemProp<T>[];

  disabled?: boolean;
  disableMove?: boolean;
  style?: StyleProp<ViewStyle>;
  placement?: "top" | "bottom";
  longPressMinDurationMs?: number;
  disablePresAnimation?: boolean;
}

const _HoldItem = <T extends any>({
  data,
  items,
  placement = "top",
  style,
  disabled,
  disableMove,
  longPressMinDurationMs = 150,
  disablePresAnimation,
  children,
  ...rest
}: PropsWithChildren<HoldItemProps<T>>) => {
  const { state, menuProps, safeAreaInsets } = useHoldItemContext();
  const deviceOrientation = useDeviceOrientation();
  const [showPortal, setShowPortal] = useState(false);

  const isActive = useSharedValue(false);

  const itemRectY = useSharedValue<number>(0);
  const itemRectX = useSharedValue<number>(0);
  const itemRectWidth = useSharedValue<number>(0);
  const itemRectHeight = useSharedValue<number>(0);
  const itemRectMaxHeight = useSharedValue<number>(WINDOW_HEIGHT);
  const itemScale = useSharedValue<number>(1);
  const transformValue = useSharedValue<number>(0);

  const transformOrigin =
    useSharedValue<TransformOriginAnchorPosition>("top-right");

  const key = useMemo(() => `hold-item-${nanoid()}`, []);
  const menuHeight = useMemo(() => {
    const itemsWithSeparator = items.filter(item => item.withSeparator);

    return calculateMenuHeight(items.length, itemsWithSeparator.length);
  }, [items]);

  const containerRef = useAnimatedRef<Animated.View>();

  const hapticResponse = useCallback(() => {
    trigger(HapticFeedbackTypes.impactLight);
  }, []);

  const prepareAnimationValues = useCallback(() => {
    "worklet";
    const measured = measure(containerRef);

    if (measured) {
      itemRectY.value = measured.pageY;
      itemRectX.value = measured.pageX;
      itemRectMaxHeight.value =
        WINDOW_HEIGHT -
        (IS_IOS ? menuHeight : menuHeight * 2) -
        safeAreaInsets.top -
        safeAreaInsets.bottom;
      itemRectHeight.value =
        measured.height > itemRectMaxHeight.value
          ? itemRectMaxHeight.value
          : measured.height;
      itemRectWidth.value = measured.width;

      transformOrigin.value = getTransformOrigin(
        measured.pageX,
        itemRectWidth.value,
        deviceOrientation === "portrait" ? WINDOW_WIDTH : WINDOW_HEIGHT,
        placement === "bottom",
      );
    }
  }, [
    containerRef,
    deviceOrientation,
    itemRectHeight,
    itemRectMaxHeight,
    itemRectWidth,
    itemRectX,
    itemRectY,
    menuHeight,
    placement,
    safeAreaInsets.bottom,
    safeAreaInsets.top,
    transformOrigin,
  ]);

  const calculateTransformValue = useCallback(() => {
    "worklet";

    const height =
      deviceOrientation === "portrait" ? WINDOW_HEIGHT : WINDOW_WIDTH;
    const isTopMenu = transformOrigin.value.includes("bottom");

    let transformY = 0;

    if (!disableMove) {
      const topPosition = isTopMenu
        ? itemRectY.value - menuHeight
        : itemRectY.value;
      const maxTopPosition = safeAreaInsets.top;

      const bottomPosition = isTopMenu
        ? itemRectY.value + itemRectHeight.value
        : itemRectY.value +
          itemRectHeight.value +
          (IS_IOS ? menuHeight : menuHeight * 2);
      const maxBottomPosition = height - safeAreaInsets.bottom;

      if (topPosition < maxTopPosition && bottomPosition > maxBottomPosition) {
        transformY = isTopMenu
          ? maxTopPosition - topPosition
          : maxBottomPosition - bottomPosition;
      } else if (topPosition < maxTopPosition) {
        transformY = maxTopPosition - topPosition;
        if (!isTopMenu && transformY + bottomPosition > maxBottomPosition) {
          transformY = maxBottomPosition - bottomPosition;
        }
      } else if (bottomPosition > maxBottomPosition) {
        transformY = maxBottomPosition - bottomPosition;
        if (isTopMenu && topPosition + transformY < maxTopPosition) {
          transformY = maxTopPosition - topPosition;
        }
      }
    }

    return transformY;
  }, [
    deviceOrientation,
    disableMove,
    itemRectHeight.value,
    itemRectY.value,
    menuHeight,
    safeAreaInsets.bottom,
    safeAreaInsets.top,
    transformOrigin.value,
  ]);

  const setMenuProps = useCallback(() => {
    "worklet";

    menuProps.value = {
      itemHeight: itemRectHeight.value,
      itemWidth: itemRectWidth.value,
      itemY: itemRectY.value,
      itemX: itemRectX.value,
      anchorPosition: transformOrigin.value,
      menuHeight: menuHeight,
      items,
      transformValue: transformValue.value,
      data,
    };
  }, [
    data,
    itemRectHeight.value,
    itemRectWidth.value,
    itemRectX.value,
    itemRectY.value,
    items,
    menuHeight,
    menuProps,
    transformOrigin.value,
    transformValue.value,
  ]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: isActive.value
        ? 0
        : withDelay(
            HOLD_ITEM_TRANSFORM_DURATION - 50,
            withTiming(1, { duration: 0 }),
          ),
      transform: [
        {
          scale: isActive.value
            ? withTiming(1, { duration: HOLD_ITEM_TRANSFORM_DURATION })
            : itemScale.value,
        },
      ],
    };
  });

  const containerStyle = [{ flexShrink: 1 }, animatedContainerStyle];

  const animatedPortalStyle = useAnimatedStyle(() => {
    const opacity = isActive.value
      ? 1
      : withDelay(HOLD_ITEM_TRANSFORM_DURATION, withTiming(0, { duration: 0 }));
    const translateY = disableMove
      ? 0
      : isActive.value
      ? withSpring(transformValue.value, SPRING_CONFIGURATION)
      : withTiming(0, { duration: HOLD_ITEM_TRANSFORM_DURATION });

    return {
      zIndex: 10,
      position: "absolute",
      top: itemRectY.value,
      left: itemRectX.value,
      width: itemRectWidth.value,
      height: itemRectHeight.value,
      opacity,
      transform: [{ translateY }],
    };
  });

  const portalContainerStyle = useMemo(
    () => [
      styles.holdItem,
      animatedPortalStyle,
      { maxHeight: itemRectMaxHeight.value },
    ],
    [animatedPortalStyle, itemRectMaxHeight.value],
  );

  const animatedPortalProps = useAnimatedProps<ViewProps>(() => ({
    pointerEvents: isActive.value ? "auto" : "none",
  }));

  useAnimatedReaction(
    () => state.value,
    _state => {
      if (_state === CONTEXT_MENU_STATE.END) {
        isActive.value = false;
      }
    },
  );

  const gesture = useMemo(
    () =>
      Gesture.LongPress()
        .minDuration(longPressMinDurationMs)
        .enabled(!disabled)
        .onBegin(() => {
          runOnJS(setShowPortal)(true);
          prepareAnimationValues();
          itemScale.value = withTiming(HOLD_ITEM_SCALE_DOWN_VALUE, {
            duration: HOLD_ITEM_SCALE_DOWN_DURATION,
          });
        })
        .onStart(() => {
          if (items && items.length > 0) {
            state.value = CONTEXT_MENU_STATE.ACTIVE;
            isActive.value = true;
            runOnJS(hapticResponse)();

            transformValue.value = calculateTransformValue();
            setMenuProps();
          }
        })
        .onFinalize(() => {
          itemScale.value = withTiming(1, {
            duration: HOLD_ITEM_TRANSFORM_DURATION / 2,
          });
        }),
    [
      calculateTransformValue,
      disabled,
      hapticResponse,
      isActive,
      itemScale,
      items,
      longPressMinDurationMs,
      prepareAnimationValues,
      setMenuProps,
      state,
      transformValue,
    ],
  );

  return (
    <>
      <TouchableOpacity
        style={[styles.touchable, style]}
        activeOpacity={0.8}
        {...rest}
      >
        <GestureDetector gesture={gesture}>
          {disablePresAnimation ? (
            <View ref={containerRef}>{children}</View>
          ) : (
            <Animated.View ref={containerRef} style={containerStyle}>
              {children}
            </Animated.View>
          )}
        </GestureDetector>
      </TouchableOpacity>

      {showPortal && (
        <Portal key={key} name={key}>
          <Animated.ScrollView
            key={key}
            style={portalContainerStyle}
            animatedProps={animatedPortalProps}
          >
            {children}
          </Animated.ScrollView>
        </Portal>
      )}
    </>
  );
};

export const HoldItem = memo(_HoldItem, isEqual) as typeof _HoldItem;

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
