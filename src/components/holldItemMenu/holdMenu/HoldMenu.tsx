import React, { memo } from "react";
import { StyleSheet, ViewProps } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { useHoldItemContext } from "../hooks";
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_DURATION,
  SPRING_CONFIGURATION,
  TMenuPosition,
} from "../utils";
import { HoldMenuList } from "./HoldMenuList";
import { HoldMenuItemProp } from "./types";

export interface IHoldMenuItemProps<T = any> extends ViewProps {
  data?: T;
  transformContent: SharedValue<number>;
  menuPosition?: TMenuPosition;
  items?: HoldMenuItemProp[];
}

export const HoldMenu = memo<IHoldMenuItemProps>(
  ({ transformContent, menuPosition = "center", items = [], ...props }) => {
    const { state, position } = useHoldItemContext();

    const wrapperStyles = useAnimatedStyle(() => {
      const isActive = state.value === CONTEXT_MENU_STATE.ACTIVE;
      const { top, left, width, height } = position.value;
      const translateY = isActive
        ? withSpring(transformContent.value, SPRING_CONFIGURATION)
        : withTiming(0, { duration: HOLD_ITEM_DURATION });

      const activeTiming = withTiming(isActive ? 1 : 0, {
        duration: HOLD_ITEM_DURATION,
      });

      return {
        opacity: activeTiming,
        top: height + top + 8,
        left: left,
        width: width,
        transform: [
          {
            translateY,
          },
          {
            scale: activeTiming,
          },
        ],
      };
    });

    return (
      <Animated.View
        {...props}
        style={[styles.menuWrapper, wrapperStyles, props.style]}
      >
        <HoldMenuList items={items} menuPosition={menuPosition} />
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  menuWrapper: {
    position: "absolute",
    zIndex: 10,
    minHeight: 1,
  },
});
