import { SharedValue, useDerivedValue } from "react-native-reanimated";

import { HoldItemProviderProps } from "../HoldItemProvider";
import { IHoldPosition } from "../types";
import {
  CONTEXT_MENU_STATE,
  IS_IOS,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../utils";
import { useDeviceOrientation } from "./index";

export const useTransformContent = (
  state: SharedValue<CONTEXT_MENU_STATE>,
  position: SharedValue<IHoldPosition>,
  safeAreaInsets: HoldItemProviderProps["safeAreaInsets"],
  menuHeight: SharedValue<number>,
  disableMove: boolean,
) => {
  const deviceOrientation = useDeviceOrientation();

  return useDerivedValue(() => {
    if (state.value !== CONTEXT_MENU_STATE.ACTIVE) return 0;
    const height =
      deviceOrientation === "portrait" ? WINDOW_HEIGHT : WINDOW_WIDTH;
    let transformY = 0;

    if (!disableMove) {
      const top = position.value.top;
      const bottom =
        position.value.top +
        position.value.height +
        (IS_IOS ? menuHeight.value : menuHeight.value * 2);
      const maxTop = safeAreaInsets.top * 2;
      const maxBottom = height - safeAreaInsets.bottom * 2;

      transformY =
        top < maxTop
          ? maxTop - top
          : bottom > maxBottom
          ? maxBottom - bottom
          : 0;
    }

    return transformY;
  });
};
