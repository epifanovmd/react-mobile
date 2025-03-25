import { useWindowDimensions } from "react-native";
import { SharedValue, useDerivedValue } from "react-native-reanimated";
import { EdgeInsets } from "react-native-safe-area-context";

import { IHoldPosition } from "../types";
import { CONTEXT_MENU_STATE, IS_IOS } from "../utils";
import { useDeviceOrientation } from "./useDeviceOrientation";

export const useTransformContent = (
  state: SharedValue<CONTEXT_MENU_STATE>,
  position: SharedValue<IHoldPosition>,
  safeAreaInsets: EdgeInsets,
  menuHeight: SharedValue<number>,
  disableMove: boolean,
) => {
  const deviceOrientation = useDeviceOrientation();
  const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = useWindowDimensions();

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
      const maxTop = (safeAreaInsets?.top || 0) + 32;
      const maxBottom = height - (safeAreaInsets?.bottom || 0) - 32;

      transformY =
        top < maxTop
          ? maxTop - top
          : bottom > maxBottom
          ? maxBottom - bottom
          : 0;
    }

    return transformY;
  }, [safeAreaInsets, disableMove, WINDOW_HEIGHT, WINDOW_WIDTH]);
};
