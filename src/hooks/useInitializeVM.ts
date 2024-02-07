import {
  InitializeDispose,
  isArray,
  isFunction,
  SupportInitialize,
} from '@force-dev/utils';
import { useEffect, useRef } from 'react';

const disposer = (dispose: Exclude<InitializeDispose, Promise<any>>) => {
  if (isArray(dispose)) {
    dispose.forEach(disposer);
  }

  if (isFunction(dispose)) {
    dispose();
  }
};

export const useInitializeVM = <D, T, Data extends D = D>(
  vm: T & SupportInitialize<D>,
  data: Data,
) => {
  const isInitialized = useRef(false);
  const { initialize } = vm;

  useEffect(() => {
    isInitialized.current = true;
    const disposes: (() => void)[] = [];

    if (initialize) {
      const dispose = initialize(data);

      if (dispose instanceof Promise) {
        dispose
          .then(disposable => {
            if (isFunction(disposable)) {
              disposes.push(disposable);
            }

            if (isArray(disposable)) {
              disposable.forEach(d => {
                disposes.push(d);
              });
            }
          })
          .catch(() => {});
      } else {
        return () => {
          disposer(dispose);
        };
      }
    }

    return () => {
      disposer(disposes);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return vm;
};
