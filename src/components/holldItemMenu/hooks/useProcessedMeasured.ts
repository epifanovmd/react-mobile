import { useWindowDimensions } from "react-native";
import {
  MeasuredDimensions,
  SharedValue,
  useDerivedValue,
} from "react-native-reanimated";
import { EdgeInsets } from "react-native-safe-area-context";

import { IS_IOS } from "../utils";

export const useProcessedMeasured = (
  measured: MeasuredDimensions | undefined,
  menuHeight: SharedValue<number>,
  safeAreaInsets?: EdgeInsets,
) => {
  const { height: WINDOW_HEIGHT } = useWindowDimensions();

  return useDerivedValue(() => {
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
  }, [WINDOW_HEIGHT, measured, safeAreaInsets]);
};
