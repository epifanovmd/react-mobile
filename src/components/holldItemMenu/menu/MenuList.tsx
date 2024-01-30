import { BlurView } from '@react-native-community/blur';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {
  CONTEXT_MENU_STATE,
  HOLD_ITEM_TRANSFORM_DURATION,
  IS_IOS,
  MENU_WIDTH,
  SPRING_CONFIGURATION_MENU,
} from '../utils/constants';
import { useHoldItemContext } from '../hooks';
import { styleGuide } from '../utils/styleGuide';

import {
  calculateMenuHeight,
  menuAnimationAnchor,
} from '../utils/calculations';
import { deepEqual } from '../utils/validations';
import { leftOrRight } from './calculations';

import { MenuItems } from './MenuItems';
import { HoldMenuItem } from './types';

const AnimatedView = Animated.createAnimatedComponent(BlurView);

export const MenuList = memo(() => {
  const { state, theme, menuProps } = useHoldItemContext();

  const [itemList, setItemList] = React.useState<HoldMenuItem[]>([]);

  const menuHeight = useDerivedValue(() => {
    const itemsWithSeparator = menuProps.value.items.filter(
      item => item.withSeparator,
    );
    return calculateMenuHeight(
      menuProps.value.items.length,
      itemsWithSeparator.length,
    );
  }, [menuProps]);
  const prevList = useSharedValue<HoldMenuItem[]>([]);

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
      height: menuHeight.value,
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
        theme.value === 'light'
          ? IS_IOS
            ? 'rgba(255, 255, 255, .75)'
            : 'rgba(255, 255, 255, .95)'
          : IS_IOS
          ? 'rgba(0,0,0,0.5)'
          : 'rgba(39, 39, 39, .8)',
    };
  }, [theme]);

  const setter = (items: HoldMenuItem[]) => {
    setItemList(items);
    prevList.value = items;
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
    <AnimatedView style={[styles.menuContainer, messageStyles]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styles.menuInnerContainer,
          animatedInnerContainerStyle,
        ]}
      >
        <MenuItems items={itemList} />
      </Animated.View>
    </AnimatedView>
  );
});

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 0,
    width: MENU_WIDTH,
    borderRadius: styleGuide.spacing * 1.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'hidden',
    zIndex: 15,
  },
  menuInnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
