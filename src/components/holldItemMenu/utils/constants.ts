import { Platform } from "react-native";

export const BORDER_LIGHT_COLOR = "rgba(0, 0, 0, 0.1)";
export const BORDER_DARK_COLOR = "rgba(255, 255, 255, 0.1)";

export const MENU_TITLE_COLOR = "gray";
export const MENU_TEXT_LIGHT_COLOR = "rgba(0, 0, 0, 1)";
export const MENU_TEXT_DARK_COLOR = "rgb(255, 255, 255)";

export const MENU_TEXT_DESTRUCTIVE_COLOR_LIGHT = "rgb(255, 59,48)";
export const MENU_TEXT_DESTRUCTIVE_COLOR_DARK = "rgb(255, 69,58)";

export const HOLD_ITEM_DURATION = 250;
export const HOLD_ITEM_SCALE_DOWN_VALUE = 0.95;
export const HOLD_ITEM_SCALE_DOWN_DURATION = 250;

export const SPRING_CONFIGURATION = {
  damping: 33,
  mass: 1.03,
  stiffness: 500,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001,
};

export enum CONTEXT_MENU_STATE {
  PENDING = 0,
  ACTIVE,
  END,
}

export const IS_IOS = Platform.OS === "ios";
