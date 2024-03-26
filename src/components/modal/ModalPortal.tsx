import { Portal } from '@gorhom/portal';
import * as React from 'react';
import { memo, PropsWithChildren } from 'react';
import { shortid } from '@force-dev/utils';

export const ModalPortal = memo(({ children }: PropsWithChildren) => (
  <Portal key={`modal-port_${shortid()}`}>{children}</Portal>
));
