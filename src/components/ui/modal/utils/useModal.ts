import * as React from 'react';
import { TClose, TOpen } from '../types';
import { Modal } from '../Modal';

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
