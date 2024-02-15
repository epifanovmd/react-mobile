import { SupportInitialize, disposer } from '@force-dev/utils';
import { useEffect, useRef } from 'react';

export const useInitialize = <D, T>(
  vm: T & SupportInitialize<D>,
  ...rest: SupportInitialize<D> extends SupportInitialize ? never : [D]
) => {
  const isInitialized = useRef(false);
  const { initialize } = vm;

  useEffect(() => {
    isInitialized.current = true;

    if (initialize) {
      const dispose = initialize(rest?.[0]);

      return () => {
        disposer(dispose);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return vm;
};
