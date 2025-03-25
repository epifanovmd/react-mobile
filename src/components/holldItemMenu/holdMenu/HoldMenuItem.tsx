import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useHoldItemContext } from "../hooks";
import {
  BORDER_DARK_COLOR,
  BORDER_LIGHT_COLOR,
  CONTEXT_MENU_STATE,
  MENU_TEXT_DARK_COLOR,
  MENU_TEXT_DESTRUCTIVE_COLOR_DARK,
  MENU_TEXT_DESTRUCTIVE_COLOR_LIGHT,
  MENU_TEXT_LIGHT_COLOR,
  MENU_TITLE_COLOR,
  styleGuide,
} from "../utils";
import { Separator } from "./Separator";
import { HoldMenuItemProp } from "./types";

export interface HoldMenuItemProps {
  item: HoldMenuItemProp;
  isLast?: boolean;
}

export const HoldMenuItem = memo(({ item, isLast }: HoldMenuItemProps) => {
  const { state, theme, data } = useHoldItemContext();

  const handleOnPress = () => {
    if (!item.isTitle) {
      if (item.onPress) {
        item.onPress(data);
      }
      if (!item.variants) {
        state.value = CONTEXT_MENU_STATE.END;
      }
    }
  };

  const borderStyles = {
    borderBottomColor:
      theme === "dark" ? BORDER_DARK_COLOR : BORDER_LIGHT_COLOR,
    borderBottomWidth: isLast ? 0 : 1,
  };

  const textColor = {
    color: item.isTitle
      ? MENU_TITLE_COLOR
      : item.isDestructive
      ? theme === "dark"
        ? MENU_TEXT_DESTRUCTIVE_COLOR_DARK
        : MENU_TEXT_DESTRUCTIVE_COLOR_LIGHT
      : theme === "dark"
      ? MENU_TEXT_DARK_COLOR
      : MENU_TEXT_LIGHT_COLOR,
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleOnPress}
        activeOpacity={!item.isTitle ? 0.4 : 1}
        style={[styles.menuItem, borderStyles]}
      >
        <Text
          numberOfLines={1}
          style={[
            item.isTitle ? styles.menuItemTitleText : styles.menuItemText,
            textColor,
          ]}
        >
          {item.text}
        </Text>
        {!item.isTitle && item.icon && item.icon()}
      </TouchableOpacity>
      {item.withSeparator && <Separator />}
    </>
  );
});

const styles = StyleSheet.create({
  menuItem: {
    paddingHorizontal: styleGuide.spacing * 2,
    paddingVertical: styleGuide.spacing * 1.25,
  },
  menuItemText: {
    fontSize: styleGuide.typography.callout.fontSize,
    lineHeight: styleGuide.typography.callout.lineHeight,
    textAlign: "left",
    width: "100%",
  },
  menuItemTitleText: {
    fontSize: styleGuide.typography.callout2.fontSize,
    lineHeight: styleGuide.typography.callout2.lineHeight,
    textAlign: "center",
  },
});
