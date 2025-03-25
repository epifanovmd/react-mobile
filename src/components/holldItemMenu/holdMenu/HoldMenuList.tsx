import React, { memo, useCallback } from "react";
import {
  LayoutChangeEvent,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
} from "react-native";
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useHoldItemContext } from "../hooks";
import {
  calculateMenuHeight,
  CONTEXT_MENU_STATE,
  IS_IOS,
  styleGuide,
} from "../utils";
import { HoldMenuItem } from "./HoldMenuItem";
import { HoldMenuItemProp } from "./types";

export interface IHoldMenuListProps {
  items: HoldMenuItemProp[];
}

export const HoldMenuList = memo<IHoldMenuListProps>(({ items }) => {
  const { state, theme, position, duration } = useHoldItemContext();
  const { width } = useWindowDimensions();

  const [itemList, setItemList] = React.useState<HoldMenuItemProp[]>([]);

  const layoutX = useSharedValue(0);
  const layoutWidth = useSharedValue(0);

  const translateX = useDerivedValue(() => {
    const calcLayout = position.value.left + layoutX.value + layoutWidth.value;

    if (calcLayout > width) {
      return -(calcLayout - width + 8);
    } else if (
      layoutX.value < 0 &&
      Math.abs(layoutX.value) > position.value.left
    ) {
      return Math.abs(position.value.left + layoutX.value) + 8;
    }

    return 0;
  });

  const menuHeight = useDerivedValue(() => {
    const separators = items.filter(item => item.withSeparator);

    return calculateMenuHeight(itemList.length, separators.length);
  }, [items, itemList]);

  const menuStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(menuHeight.value, { duration }),
      opacity: withTiming(state.value === CONTEXT_MENU_STATE.ACTIVE ? 1 : 0, {
        duration,
      }),
      transform: [{ translateX: translateX.value }],
    };
  });

  const updateItems = (items: HoldMenuItemProp[]) => {
    const newItems = items.map(item =>
      item.isDestructive
        ? {
            ...item,
            onPress: (data: any) => {
              item.onPress?.(data);

              if (item.variants) {
                setItemList(item.variants);
              }
            },
          }
        : item,
    );

    setItemList(newItems);
  };

  useAnimatedReaction(
    () => state.value,
    () => {
      runOnJS(updateItems)(items);
    },
    [state.value],
  );

  const style: ViewStyle = {
    backgroundColor:
      theme === "light"
        ? IS_IOS
          ? "rgba(255, 255, 255, .75)"
          : "rgba(255, 255, 255, .95)"
        : IS_IOS
        ? "rgba(0,0,0,0.5)"
        : "rgba(39, 39, 39, .8)",
    minWidth: width * 0.4,
    maxWidth: width * 0.7,
  };

  const onLayout = useCallback(
    ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      layoutX.value = layout.x;
      layoutWidth.value = layout.width;
    },
    [layoutX, layoutWidth],
  );

  return (
    <Animated.View
      style={[styles.menuContainer, menuStyles, style]}
      onLayout={onLayout}
    >
      {itemList.map((item: HoldMenuItemProp, index: number) => (
        <HoldMenuItem
          key={index}
          item={item}
          isLast={itemList.length === index + 1}
        />
      ))}
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  menuContainer: {
    borderRadius: styleGuide.spacing * 1.5,
    overflow: "hidden",
    zIndex: 10,
  },
});
