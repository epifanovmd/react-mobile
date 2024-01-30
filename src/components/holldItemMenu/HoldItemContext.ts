import { createContext } from 'react';
import { SharedValue } from 'react-native-reanimated';
import { HoldMenuContext } from './holdMenu/types';
import type { CONTEXT_MENU_STATE } from './utils/constants';

export interface HoldItemContext {
  state: SharedValue<CONTEXT_MENU_STATE>;
  theme: SharedValue<'light' | 'dark'>;
  menuProps: SharedValue<HoldMenuContext>;
  safeAreaInsets?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export const HoldItemContext = createContext<HoldItemContext>(
  {} as HoldItemContext,
);
