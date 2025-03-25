import {
  MeasuredDimensions,
  SharedValue,
  useDerivedValue,
} from "react-native-reanimated";
import { EdgeInsets } from "react-native-safe-area-context";

import { IHoldPosition } from "../types";
import { IS_IOS, WINDOW_HEIGHT } from "../utils";

export const usePosition = (
  measured: MeasuredDimensions | undefined,
  safeAreaInsets: EdgeInsets,
  menuHeight: SharedValue<number>,
) =>
  useDerivedValue<IHoldPosition>(() => {
    const maxHeight =
      WINDOW_HEIGHT -
      (IS_IOS ? menuHeight.value : menuHeight.value * 2) -
      ((safeAreaInsets?.top || 0) + 32) -
      ((safeAreaInsets?.bottom || 0) + 32);

    return {
      top: measured?.pageY || 0,
      left: measured?.pageX || 0,
      width: measured?.width || 0,
      height: measured?.height ? Math.min(measured.height, maxHeight) : 0,
    };
  }, [measured]);
