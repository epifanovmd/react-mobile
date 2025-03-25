import React, { memo } from "react";
import { StyleSheet, ViewProps, ViewStyle } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { useHoldItemContext } from "../hooks";
import {
  CONTEXT_MENU_STATE,
  SPRING_CONFIGURATION,
  TMenuPosition,
} from "../utils";
import { HoldMenuList } from "./HoldMenuList";
import { HoldMenuItemProp } from "./types";

export interface IHoldMenuItemProps extends ViewProps {
  items: HoldMenuItemProp[];
  menuPosition?: TMenuPosition;
  transformContent: SharedValue<number>;
}

export const HoldMenu = memo<IHoldMenuItemProps>(
  ({ items, menuPosition = "center", transformContent, ...props }) => {
    const { state, position, duration } = useHoldItemContext();

    const wrapperStyles = useAnimatedStyle(() => {
      const isActive = state.value === CONTEXT_MENU_STATE.ACTIVE;
      const { top, left, width, height } = position.value;
      const translateY = isActive
        ? withSpring(transformContent.value, SPRING_CONFIGURATION)
        : withTiming(0, { duration });

      const activeTiming = withTiming(isActive ? 1 : 0, {
        duration,
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

    const positionStyle: ViewStyle = {
      justifyContent:
        menuPosition === "left"
          ? "flex-start"
          : menuPosition === "right"
          ? "flex-end"
          : "center",
    };

    return (
      <Animated.View
        {...props}
        style={[ss.wrap, wrapperStyles, positionStyle, props.style]}
      >
        <HoldMenuList items={items} />
      </Animated.View>
    );
  },
);

const ss = StyleSheet.create({
  wrap: {
    position: "absolute",
    zIndex: 10,
    minHeight: 1,
    display: "flex",
    flexDirection: "row",
  },
});
