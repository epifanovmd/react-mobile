import React, { FC, PropsWithChildren } from 'react';
import { Text, TextProps } from '../ui';
import { isString } from '@force-dev/utils';

export interface RenderTextOrElementProps
  extends Omit<TextProps, 'text' | 'children'> {
  text?: string | React.JSX.Element;
  children?: string | React.JSX.Element;
}

export const RenderTextOrElement: FC<
  PropsWithChildren<RenderTextOrElementProps>
> = ({ text, children, ...rest }) => {
  const value = text || children || null;

  return isString(value) ? <Text {...rest}>{value}</Text> : value;
};
