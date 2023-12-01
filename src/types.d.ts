import {
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  FunctionComponent,
  NamedExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

declare module 'react' {
  function memo<P extends object, Slots extends {}>(
    Component: FunctionComponent<P>,
    propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean,
  ): NamedExoticComponent<P> & Slots;

  function forwardRef<T, P = {}, Slots extends {}>(
    render: ForwardRefRenderFunction<T, P>,
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> & Slots;
}
