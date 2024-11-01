import { BottomSheetModal } from "@gorhom/bottom-sheet";
import * as React from "react";
import { memo } from "react";

import { ModalBackdrop } from "./ModalBackdrop";
import { BottomSheetModalProps } from "./types";

export type Modal = BottomSheetModal;
export type ModalProps = BottomSheetModalProps;

export const Modal = memo(
  React.forwardRef(
    ({ children, ...rest }: ModalProps, ref: React.Ref<BottomSheetModal>) => {
      return (
        <BottomSheetModal ref={ref} backdropComponent={ModalBackdrop} {...rest}>
          {children}
        </BottomSheetModal>
      );
    },
  ),
);
