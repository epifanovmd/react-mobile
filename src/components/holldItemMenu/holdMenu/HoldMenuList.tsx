import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { useHoldItemContext } from "../hooks";
import {
  calculateMenuHeight,
  menuAnimationAnchor,
} from "../utils/calculations";
import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_TRANSFORM_DURATION,
  IS_IOS,
  MENU_WIDTH,
  SPRING_CONFIGURATION_MENU,
} from "../utils/constants";
import { styleGuide } from "../utils/styleGuide";
import { deepEqual } from "../utils/validations";
import { leftOrRight } from "./calculations";
import { HoldMenuItems } from "./HoldMenuItems";
import { HoldMenuItemProp } from "./types";

export const HoldMenuList = memo(() => {
  const { state, theme, menuProps } = useHoldItemContext();

  const [itemList, setItemList] = React.useState<HoldMenuItemProp[]>([]);

  const menuHeight = useDerivedValue(() => {
    const itemsWithSeparator = menuProps.value.items.filter(
      item => item.withSeparator,
    );

    return calculateMenuHeight(itemList.length, itemsWithSeparator.length);
  }, [menuProps, itemList]);
  const prevList = useSharedValue<HoldMenuItemProp[]>([]);

  const messageStyles = useAnimatedStyle(() => {
    const itemsWithSeparator = menuProps.value.items.filter(
      item => item.withSeparator,
    );

    const translate = menuAnimationAnchor(
      menuProps.value.anchorPosition,
      menuProps.value.itemWidth,
      menuProps.value.items.length,
      itemsWithSeparator.length,
    );

    const _leftPosition = leftOrRight(menuProps);

    const menuScaleAnimation = () =>
      state.value === CONTEXT_MENU_STATE.ACTIVE
        ? withSpring(1, SPRING_CONFIGURATION_MENU)
        : withTiming(0, {
            duration: HOLD_ITEM_TRANSFORM_DURATION,
          });

    const opacityAnimation = () =>
      withTiming(state.value === CONTEXT_MENU_STATE.ACTIVE ? 1 : 0, {
        duration: HOLD_ITEM_TRANSFORM_DURATION,
      });

    return {
      left: _leftPosition,
      height: withTiming(menuHeight.value, { duration: 150 }),
      opacity: opacityAnimation(),
      transform: [
        { translateX: translate.beginningTransformations.translateX },
        { translateY: translate.beginningTransformations.translateY },
        {
          scale: menuScaleAnimation(),
        },
        { translateX: translate.endingTransformations.translateX },
        { translateY: translate.endingTransformations.translateY },
      ],
    };
  });

  const animatedInnerContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor:
        theme.value === "light"
          ? IS_IOS
            ? "rgba(255, 255, 255, .75)"
            : "rgba(255, 255, 255, .95)"
          : IS_IOS
          ? "rgba(0,0,0,0.5)"
          : "rgba(39, 39, 39, .8)",
    };
  }, [theme]);

  const setter = (items: HoldMenuItemProp[]) => {
    const newItems = items.map(item =>
      item.isDestructive
        ? {
            ...item,
            onPress: (data: any) => {
              item.onPress?.(data);

              if (item.variants) {
                setItemList(item.variants);
                prevList.value = item.variants;
              }
            },
          }
        : item,
    );

    setItemList(newItems);
    prevList.value = newItems;
  };

  useAnimatedReaction(
    () => menuProps.value.items,
    _items => {
      if (!deepEqual(_items, prevList.value)) {
        runOnJS(setter)(_items);
      }
    },
    [menuProps],
  );

  return (
    <Animated.View style={[styles.menuContainer, messageStyles]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styles.menuInnerContainer,
          animatedInnerContainerStyle,
        ]}
      >
        <HoldMenuItems items={itemList} />
      </Animated.View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 0,
    width: MENU_WIDTH,
    borderRadius: styleGuide.spacing * 1.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
    zIndex: 15,
  },
  menuInnerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
