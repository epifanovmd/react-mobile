import {
  MeasuredDimensions,
  SharedValue,
  useDerivedValue,
} from "react-native-reanimated";

import { HoldItemProviderProps } from "../HoldItemProvider";
import { IHoldPosition } from "../types";
import { IS_IOS, WINDOW_HEIGHT } from "../utils";

export const usePosition = (
  measured: MeasuredDimensions | undefined,
  safeAreaInsets: HoldItemProviderProps["safeAreaInsets"],
  menuHeight: SharedValue<number>,
) =>
  useDerivedValue<IHoldPosition>(() => {
    const maxHeight =
      WINDOW_HEIGHT -
      (IS_IOS ? menuHeight.value : menuHeight.value * 2) -
      safeAreaInsets.top * 2 -
      safeAreaInsets.bottom * 2;

    return {
      top: measured?.pageY || 0,
      left: measured?.pageX || 0,
      width: measured?.width || 0,
      height: measured?.height ? Math.min(measured.height, maxHeight) : 0,
    };
  }, [measured]);
