import { PortalProvider } from '@gorhom/portal';
import React, { FC, memo, PropsWithChildren, useEffect, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';

import { Backdrop } from './backdrop';
import { HoldItemContext } from './HoldItemContext';

import { Menu } from './menu';
import { MenuInternalProps } from './menu/types';
import { CONTEXT_MENU_STATE } from './utils/constants';

export interface HoldItemMenuProviderProps {
  theme?: 'dark' | 'light';
  safeAreaInsets: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };

  onOpen?: () => void;
  onClose?: () => void;
}

export const HoldItemMenuProvider: FC<
  PropsWithChildren<HoldItemMenuProviderProps>
> = memo(
  ({ children, theme: selectedTheme, safeAreaInsets, onOpen, onClose }) => {
    const state = useSharedValue<CONTEXT_MENU_STATE>(
      CONTEXT_MENU_STATE.PENDING,
    );
    const theme = useSharedValue<'light' | 'dark'>(selectedTheme || 'light');
    const menuProps = useSharedValue<MenuInternalProps>({
      itemHeight: 0,
      itemWidth: 0,
      itemX: 0,
      itemY: 0,
      items: [],
      anchorPosition: 'top-center',
      menuHeight: 0,
      transformValue: 0,
    });

    useEffect(() => {
      theme.value = selectedTheme || 'light';
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTheme]);

    useAnimatedReaction(
      () => state.value,
      stateValue => {
        switch (stateValue) {
          case CONTEXT_MENU_STATE.ACTIVE: {
            if (onOpen) {
              runOnJS(onOpen)();
            }
            break;
          }
          case CONTEXT_MENU_STATE.END: {
            if (onClose) {
              runOnJS(onClose)();
            }
            break;
          }
        }
      },
      [state],
    );

    const internalContextVariables = useMemo(
      () => ({
        state,
        theme,
        menuProps,
        safeAreaInsets: safeAreaInsets || {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      }),
      [state, theme, menuProps, safeAreaInsets],
    );

    return (
      <GestureHandlerRootView style={styles.wrap}>
        <HoldItemContext.Provider value={internalContextVariables}>
          <PortalProvider>
            {children}
            <Backdrop />
            <Menu />
          </PortalProvider>
        </HoldItemContext.Provider>
      </GestureHandlerRootView>
    );
  },
);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});
