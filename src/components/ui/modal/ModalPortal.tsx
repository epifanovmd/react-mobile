import { ModalConsumer } from './ModalConsumer';
import { ModalContext } from './ModalHost';
import * as React from 'react';
import { memo, PropsWithChildren } from 'react';

export const ModalPortal = memo(({ children }: PropsWithChildren) => (
  <ModalContext.Consumer>
    {manager => <ModalConsumer manager={manager}>{children}</ModalConsumer>}
  </ModalContext.Consumer>
));
