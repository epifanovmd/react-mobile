import {
  SharedValue,
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { IHoldPosition } from "../types";
import { CONTEXT_MENU_STATE } from "../utils";

export const usePosition = (
  state: SharedValue<CONTEXT_MENU_STATE>,
  processedPosition: SharedValue<IHoldPosition>,
  duration: number,
  targetPosition?: IHoldPosition,
) => {
  const top = useSharedValue<number>(0);
  const left = useSharedValue<number>(0);
  const width = useSharedValue<number>(0);
  const height = useSharedValue<number>(0);

  useAnimatedReaction(
    () => state.value,
    stateValue => {
      if (stateValue === CONTEXT_MENU_STATE.END) {
        top.value = withTiming(processedPosition.value.top, { duration });
        left.value = withTiming(processedPosition.value.left, { duration });
        width.value = withTiming(processedPosition.value.width, { duration });
        height.value = withTiming(processedPosition.value.height, { duration });
      }
    },
    [],
  );

  useAnimatedReaction(
    () => processedPosition.value,
    item => {
      top.value = item.top;
      left.value = item.left;
      width.value = item.width;
      height.value = item.height;

      if (targetPosition) {
        top.value = withTiming(targetPosition.top, { duration });
        left.value = withTiming(targetPosition.left, { duration });
        width.value = withTiming(targetPosition.width, { duration });
        height.value = withTiming(targetPosition.height, { duration });
      }
    },
  );

  return useDerivedValue<IHoldPosition>(() => {
    return {
      top: top.value,
      left: left.value,
      width: width.value,
      height: height.value,
    };
  }, [processedPosition]);
};
