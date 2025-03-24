import { FONT_SCALE, MENU_WIDTH } from "./constants";
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

export type TMenuPosition = "left" | "center" | "right";

export const menuAnimationAnchor = (
  menuPosition: TMenuPosition,
  itemWidth: number,
  itemLength: number,
  itemsWithSeparatorLength: number,
) => {
  "worklet";
  const MenuHeight = calculateMenuHeight(itemLength, itemsWithSeparatorLength);

  const Center1 = itemWidth;
  const Center2 = 0;

  const TyTop1 = -(MenuHeight / 2);
  const TyTop2 = MenuHeight / 2;

  const TxLeft1 = (MENU_WIDTH / 2) * -1;
  const TxLeft2 = MENU_WIDTH / 2;

  return {
    beginningTransformations: {
      translateX:
        menuPosition === "right"
          ? -TxLeft1
          : menuPosition === "left"
          ? TxLeft1
          : Center1,
      translateY: TyTop1,
    },
    endingTransformations: {
      translateX:
        menuPosition === "right"
          ? -TxLeft2
          : menuPosition === "left"
          ? TxLeft2
          : Center2,
      translateY: TyTop2,
    },
  };
};
