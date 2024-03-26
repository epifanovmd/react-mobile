import { Portal } from '@gorhom/portal';
import * as React from 'react';
import { memo, PropsWithChildren } from 'react';
import { uuid } from '@force-dev/utils';

export const ModalPortal = memo(({ children }: PropsWithChildren) => (
  <Portal key={`modal-port_${uuid()}`}>{children}</Portal>
));
