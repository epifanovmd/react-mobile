import {
  FONT_SCALE,
  MENU_TRANSFORM_ORIGIN_TOLERENCE,
  MENU_WIDTH,
} from "./constants";
import { styleGuide } from "./styleGuide";

export const menuItemHeight = () => {
  "worklet";

  return (
    styleGuide.typography.callout.lineHeight * FONT_SCALE +
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

export type TransformAnchorPosition = "top-right" | "top-left" | "top-center";

export const menuAnimationAnchor = (
  anchorPoint: TransformAnchorPosition,
  itemWidth: number,
  itemLength: number,
  itemsWithSeparatorLength: number,
) => {
  "worklet";
  const MenuHeight = calculateMenuHeight(itemLength, itemsWithSeparatorLength);
  const splittetAnchorName: string[] = anchorPoint.split("-");

  const Center1 = itemWidth;
  const Center2 = 0;

  const TyTop1 = -(MenuHeight / 2);
  const TyTop2 = MenuHeight / 2;

  const TxLeft1 = (MENU_WIDTH / 2) * -1;
  const TxLeft2 = MENU_WIDTH / 2;

  return {
    beginningTransformations: {
      translateX:
        splittetAnchorName[1] === "right"
          ? -TxLeft1
          : splittetAnchorName[1] === "left"
          ? TxLeft1
          : Center1,
      translateY:
        splittetAnchorName[0] === "top"
          ? TyTop1
          : splittetAnchorName[0] === "bottom"
          ? TyTop1
          : Center2,
    },
    endingTransformations: {
      translateX:
        splittetAnchorName[1] === "right"
          ? -TxLeft2
          : splittetAnchorName[1] === "left"
          ? TxLeft2
          : Center2,
      translateY:
        splittetAnchorName[0] === "top"
          ? TyTop2
          : splittetAnchorName[0] === "bottom"
          ? -TyTop2
          : Center2,
    },
  };
};

export const getAnchorPosition = (
  top: number,
  width: number,
  windowWidth: number,
): TransformAnchorPosition => {
  "worklet";
  const distanceToLeft = Math.round(top + width / 2);
  const distanceToRight = Math.round(windowWidth - distanceToLeft);

  let position: TransformAnchorPosition = "top-right";

  const majority = Math.abs(distanceToLeft - distanceToRight);

  if (majority < MENU_TRANSFORM_ORIGIN_TOLERENCE) {
    position = "top-center";
  } else if (distanceToLeft < distanceToRight) {
    position = "top-left";
  }

  return position;
};
