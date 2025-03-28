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

import { Modal, ModalRef } from "./Modal";

export const useModalRef = () => {
  return useRef<ModalRef>(null);
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
