import React, { FC, PropsWithChildren } from 'react';
import { Col, FlexProps } from '../ui';

export interface RenderIfNotEmptyProps extends FlexProps {
  element?: React.JSX.Element;
}

export const RenderIfNotEmpty: FC<PropsWithChildren<RenderIfNotEmptyProps>> = ({
  element,
  children,
  ...rest
}) => {
  return element || children ? (
    <Col {...rest}>{element || children}</Col>
  ) : null;
};
