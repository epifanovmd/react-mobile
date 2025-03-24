import { IHoldPosition } from "../types";
import { MENU_WIDTH, TMenuPosition } from "../utils";
import {
  MENU_TEXT_DARK_COLOR,
  MENU_TEXT_DESTRUCTIVE_COLOR_DARK,
  MENU_TEXT_DESTRUCTIVE_COLOR_LIGHT,
  MENU_TEXT_LIGHT_COLOR,
  MENU_TITLE_COLOR,
} from "./constants";

export const leftOrRight = (
  menuPosition: TMenuPosition,
  position: IHoldPosition,
) => {
  "worklet";

  let leftPosition = 0;

  menuPosition === "right"
    ? (leftPosition = -MENU_WIDTH + position.width)
    : menuPosition === "left"
    ? (leftPosition = 0)
    : (leftPosition = -position.width - MENU_WIDTH / 2 + position.width / 2);

  return leftPosition;
};

export const getMenuItemColor = (
  isTitle: boolean | undefined,
  isDestructive: boolean | undefined,
  themeValue: "light" | "dark",
) => {
  "worklet";

  return isTitle
    ? MENU_TITLE_COLOR
    : isDestructive
    ? themeValue === "dark"
      ? MENU_TEXT_DESTRUCTIVE_COLOR_DARK
      : MENU_TEXT_DESTRUCTIVE_COLOR_LIGHT
    : themeValue === "dark"
    ? MENU_TEXT_DARK_COLOR
    : MENU_TEXT_LIGHT_COLOR;
};
