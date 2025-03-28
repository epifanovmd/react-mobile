import { BottomSheetModal } from "@gorhom/bottom-sheet";
import * as React from "react";
import { memo } from "react";

import {
  BottomSheetBackdrop,
  BottomSheetDraggableView,
  BottomSheetFlashList,
  BottomSheetFlatList,
  BottomSheetFooter,
  BottomSheetFooterContainer,
  BottomSheetHandle,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetSectionList,
  BottomSheetTextInput,
  BottomSheetView,
  BottomSheetVirtualizedList,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "./components";
import { ModalBackdrop } from "./ModalBackdrop";
import { BottomSheetModalProps } from "./types";

export type IModalProps<T = any> = BottomSheetModalProps<T>;
export type ModalRef<T = any> = BottomSheetModal<T>;
export interface IModal {
  <T>(
    props: IModalProps<T> & {
      ref?: React.ForwardedRef<ModalRef<T>>;
    },
  ): ReturnType<typeof BottomSheetModal<T>>;

  Backdrop: typeof BottomSheetBackdrop;
  DraggableView: typeof BottomSheetDraggableView;
  FlashList: typeof BottomSheetFlashList;
  FlatList: typeof BottomSheetFlatList;
  Footer: typeof BottomSheetFooter;
  FooterContainer: typeof BottomSheetFooterContainer;
  Handle: typeof BottomSheetHandle;
  ModalProvider: typeof BottomSheetModalProvider;
  ScrollView: typeof BottomSheetScrollView;
  SectionList: typeof BottomSheetSectionList;
  TextInput: typeof BottomSheetTextInput;
  View: typeof BottomSheetView;
  VirtualizedList: typeof BottomSheetVirtualizedList;
  TouchableHighlight: typeof TouchableHighlight;
  TouchableOpacity: typeof TouchableOpacity;
  TouchableWithoutFeedback: typeof TouchableWithoutFeedback;
}

const _Modal = React.forwardRef(
  ({ children, ...rest }: IModalProps, ref: React.Ref<BottomSheetModal>) => {
    return (
      <BottomSheetModal ref={ref} backdropComponent={ModalBackdrop} {...rest}>
        {children}
      </BottomSheetModal>
    );
  },
);

export const Modal = memo(_Modal) as unknown as IModal;

Modal.Backdrop = BottomSheetBackdrop;
Modal.DraggableView = BottomSheetDraggableView;
Modal.FlashList = BottomSheetFlashList;
Modal.FlatList = BottomSheetFlatList;
Modal.Footer = BottomSheetFooter;
Modal.FooterContainer = BottomSheetFooterContainer;
Modal.Handle = BottomSheetHandle;
Modal.ModalProvider = BottomSheetModalProvider;
Modal.ScrollView = BottomSheetScrollView;
Modal.SectionList = BottomSheetSectionList;
Modal.TextInput = BottomSheetTextInput;
Modal.View = BottomSheetView;
Modal.VirtualizedList = BottomSheetVirtualizedList;
Modal.TouchableHighlight = TouchableHighlight;
Modal.TouchableOpacity = TouchableOpacity;
Modal.TouchableWithoutFeedback = TouchableWithoutFeedback;
