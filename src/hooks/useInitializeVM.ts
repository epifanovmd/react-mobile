import { useEffect, useRef } from 'react';
import { isArray, isFunction, SupportInitialize } from '@force-dev/utils';

export const useInitializeVM = <D, T, Data extends D = D>(
  vm: T & SupportInitialize<D> & { dispose?: () => void },
  data: Data,
) => {
  const isInitialized = useRef(false);
  const { initialize } = vm;

  useEffect(() => {
    isInitialized.current = true;

    if (initialize) {
      const dispose = initialize(data);

      if (isArray(dispose)) {
        return () => {
          dispose.forEach(d => {
            if (isFunction(d)) {
              d();
            }
          });
        };
      }

      if (isFunction(dispose)) {
        return dispose;
      }
    }

    return () => {};

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return vm;
};
