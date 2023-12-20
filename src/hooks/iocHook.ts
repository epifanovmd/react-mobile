import { useRef } from 'react';
import { IIoCInterface } from '@force-dev/utils';

export const iocHook =
  <T>(ioc: IIoCInterface<T>) =>
  () =>
    useRef(ioc.getInstance()).current;
