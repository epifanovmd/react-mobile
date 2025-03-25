import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { useHoldItemContext } from "../hooks";
import {
  calculateMenuHeight,
  CONTEXT_MENU_STATE,
  HOLD_ITEM_DURATION,
  IS_IOS,
  MENU_WIDTH,
  menuAnimationAnchor,
  SPRING_CONFIGURATION_MENU,
  styleGuide,
  TMenuPosition,
} from "../utils";
import { leftOrRight } from "./calculations";
import { HoldMenuItem } from "./HoldMenuItem";
import { HoldMenuItemProp } from "./types";

export interface IHoldMenuListProps {
  menuPosition: TMenuPosition;
  items: HoldMenuItemProp[];
}

export const HoldMenuList = memo<IHoldMenuListProps>(
  ({ menuPosition, items }) => {
    const { state, theme, position } = useHoldItemContext();

    const [itemList, setItemList] = React.useState<HoldMenuItemProp[]>([]);

    const menuHeight = useDerivedValue(() => {
      const separators = items.filter(item => item.withSeparator);

      return calculateMenuHeight(itemList.length, separators.length);
    }, [items, itemList]);

    const menuStyles = useAnimatedStyle(() => {
      const separators = items.filter(item => item.withSeparator);

      const translate = menuAnimationAnchor(
        menuPosition,
        position.value.width,
        items.length,
        separators.length,
      );

      const menuScaleAnimation = () =>
        state.value === CONTEXT_MENU_STATE.ACTIVE
          ? withSpring(1, SPRING_CONFIGURATION_MENU)
          : withTiming(0, {
              duration: HOLD_ITEM_DURATION,
            });

      const opacityAnimation = () =>
        withTiming(state.value === CONTEXT_MENU_STATE.ACTIVE ? 1 : 0, {
          duration: HOLD_ITEM_DURATION,
        });

      return {
        left: leftOrRight(menuPosition, position.value),
        height: withTiming(menuHeight.value, { duration: 150 }),
        opacity: opacityAnimation(),
        transform: [
          { translateX: translate.beginningTransformations.translateX },
          {
            scale: menuScaleAnimation(),
          },
          { translateX: translate.endingTransformations.translateX },
        ],
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

    const animatedInnerContainerStyle = {
      backgroundColor:
        theme === "light"
          ? IS_IOS
            ? "rgba(255, 255, 255, .75)"
            : "rgba(255, 255, 255, .95)"
          : IS_IOS
          ? "rgba(0,0,0,0.5)"
          : "rgba(39, 39, 39, .8)",
    };

    return (
      <Animated.View style={[styles.menuContainer, menuStyles]}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            styles.menuInnerContainer,
            animatedInnerContainerStyle,
          ]}
        >
          {itemList.map((item: HoldMenuItemProp, index: number) => (
            <HoldMenuItem
              key={index}
              item={item}
              isLast={itemList.length === index + 1}
            />
          ))}
        </Animated.View>
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  menuContainer: {
    width: MENU_WIDTH,
    borderRadius: styleGuide.spacing * 1.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
    zIndex: 10,
  },
  menuInnerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
