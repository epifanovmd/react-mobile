import * as React from "react";

import { Modal } from "../Modal";
import { TClose, TOpen } from "../types";

export const useModal = () => {
  const ref = React.useRef<Modal>(null);

  const close = React.useCallback((dest?: TClose) => {
    ref.current?.close(dest);
  }, []);

  const open = React.useCallback((dest?: TOpen) => {
    ref.current?.open(dest);
  }, []);

  return { ref, open, close };
};
