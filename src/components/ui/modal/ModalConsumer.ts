import * as React from 'react';
import { IModalConsumerProps } from './types';
import { memo } from 'react';

export const ModalConsumer = memo(
  ({ children, manager }: IModalConsumerProps): null => {
    const key = React.useRef<string | undefined>(undefined);

    const checkManager = (): void => {
      if (!manager) {
        throw new Error('No portal manager defined');
      }
    };

    const handleInit = (): void => {
      checkManager();
      key.current = manager?.mount(children);
    };

    React.useEffect(() => {
      checkManager();
      manager?.update(key.current, children);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children, manager]);

    React.useEffect(() => {
      handleInit();

      return (): void => {
        checkManager();
        manager?.unmount(key.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
  },
);
