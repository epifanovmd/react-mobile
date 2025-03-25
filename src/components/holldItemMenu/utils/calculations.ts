import { Dimensions } from "react-native";

import { styleGuide } from "./styleGuide";

const { fontScale } = Dimensions.get("screen");

export const menuItemHeight = () => {
  "worklet";

  return (
    styleGuide.typography.callout.lineHeight * fontScale +
    styleGuide.spacing * 2.5
  );
};

export const calculateMenuHeight = (
  itemLength: number,
  separatorCount: number,
) => {
  "worklet";

  return itemLength < 2
    ? menuItemHeight() * itemLength
    : menuItemHeight() * itemLength +
        (itemLength - 1) +
        separatorCount * styleGuide.spacing;
};

export type TMenuPosition = "left" | "center" | "right";
