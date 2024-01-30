import { isEqual } from 'lodash';
import React, { memo, useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useHoldItemContext } from '../hooks';
import { CONTEXT_MENU_STATE, MENU_WIDTH } from '../utils/constants';
import { styleGuide } from '../utils/styleGuide';
import { getColor } from './calculations';
import { BORDER_DARK_COLOR, BORDER_LIGHT_COLOR } from './constants';

import { Separator } from './Separator';

import { HoldMenuItemProp } from './types';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export interface HoldMenuItemProps {
  item: HoldMenuItemProp;
  isLast?: boolean;
}

export const HoldMenuItem = memo(({ item, isLast }: HoldMenuItemProps) => {
  const { state, theme } = useHoldItemContext();

  const borderStyles = useAnimatedStyle(() => {
    const borderBottomColor =
      theme.value === 'dark' ? BORDER_DARK_COLOR : BORDER_LIGHT_COLOR;

    return {
      borderBottomColor,
      borderBottomWidth: isLast ? 0 : 1,
    };
  }, [theme, isLast, item]);

  const textColor = useAnimatedStyle(() => {
    return { color: getColor(item.isTitle, item.isDestructive, theme.value) };
  }, [theme, item]);

  const handleOnPress = useCallback(() => {
    if (!item.isTitle) {
      if (item.onPress) {
        item.onPress();
      }
      state.value = CONTEXT_MENU_STATE.END;
    }
  }, [state, item]);

  return (
    <>
      <AnimatedTouchable
        onPress={handleOnPress}
        activeOpacity={!item.isTitle ? 0.4 : 1}
        style={[styles.menuItem, borderStyles]}
      >
        <Animated.Text
          numberOfLines={1}
          style={[
            item.isTitle ? styles.menuItemTitleText : styles.menuItemText,
            textColor,
          ]}
        >
          {item.text}
        </Animated.Text>
        {!item.isTitle && item.icon && item.icon()}
      </AnimatedTouchable>
      {item.withSeparator && <Separator />}
    </>
  );
}, isEqual);

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
  menuItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: styleGuide.spacing * 2,
    paddingVertical: styleGuide.spacing * 1.25,
  },
  menuItemText: {
    fontSize: styleGuide.typography.callout.fontSize,
    lineHeight: styleGuide.typography.callout.lineHeight,
    textAlign: 'left',
    width: '100%',
    flex: 1,
  },
  menuItemTitleText: {
    fontSize: styleGuide.typography.callout2.fontSize,
    lineHeight: styleGuide.typography.callout2.lineHeight,
    textAlign: 'center',
    width: '100%',
    flex: 1,
  },
});
