import { createContext } from "react";
import { SharedValue } from "react-native-reanimated";

import { HoldMenuContext } from "./holdMenu/types";
import type { CONTEXT_MENU_STATE } from "./utils/constants";

export interface HoldItemContext<T = any> {
  state: SharedValue<CONTEXT_MENU_STATE>;
  theme: SharedValue<"light" | "dark">;
  menuProps: SharedValue<HoldMenuContext<T>>;
  safeAreaInsets: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export const HoldItemContext = createContext<HoldItemContext>({
  safeAreaInsets: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
} as HoldItemContext);
