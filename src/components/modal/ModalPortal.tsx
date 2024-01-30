import { Portal } from '@gorhom/portal';
import * as React from 'react';
import { memo, PropsWithChildren } from 'react';
import { genId } from '@force-dev/utils';

export const ModalPortal = memo(({ children }: PropsWithChildren) => (
  <Portal key={`modal-port_${genId()}`}>{children}</Portal>
));
