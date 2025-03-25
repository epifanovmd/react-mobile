import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import { useHoldItemContext } from "../hooks";
import { BORDER_DARK_COLOR, BORDER_LIGHT_COLOR } from "../utils";

export const Separator = memo(() => {
  const { theme } = useHoldItemContext();

  const separatorStyles = useAnimatedStyle(() => {
    const isDark = theme === "dark";

    return {
      backgroundColor: isDark ? BORDER_DARK_COLOR : BORDER_LIGHT_COLOR,
    };
  }, [theme]);

  return <Animated.View style={[styles.separator, { ...separatorStyles }]} />;
});

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 8,
  },
});
