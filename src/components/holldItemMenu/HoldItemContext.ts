import { createContext } from "react";
import { SharedValue } from "react-native-reanimated";

import { IHoldItemValue, IHoldPosition } from "./types";
import type { CONTEXT_MENU_STATE } from "./utils";

export interface IHoldItemContext<T = any> {
  state: SharedValue<CONTEXT_MENU_STATE>;
  theme: "light" | "dark";
  setValue: (menu: IHoldItemValue<T>) => void;
  position: SharedValue<IHoldPosition>;
  data?: T;
  safeAreaInsets: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export const HoldItemContext = createContext<IHoldItemContext>({
  safeAreaInsets: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
} as IHoldItemContext);
