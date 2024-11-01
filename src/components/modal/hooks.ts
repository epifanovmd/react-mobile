import {
  useBottomSheet,
  useBottomSheetGestureHandlers,
  useBottomSheetInternal,
  useBottomSheetModal,
  useBottomSheetModalInternal,
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs,
  useGestureEventsHandlersDefault,
  useScrollableSetter,
  useScrollEventsHandlersDefault,
  useScrollHandler,
} from "@gorhom/bottom-sheet";
import { useRef } from "react";

import { Modal } from "./Modal";

export const useModalRef = () => {
  return useRef<Modal>(null);
};

export {
  useBottomSheet,
  useBottomSheetGestureHandlers,
  useBottomSheetInternal,
  useBottomSheetModal,
  useBottomSheetModalInternal,
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs,
  useGestureEventsHandlersDefault,
  useScrollableSetter,
  useScrollEventsHandlersDefault,
  useScrollHandler,
};
