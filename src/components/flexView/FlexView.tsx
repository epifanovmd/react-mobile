import * as React from 'react';
import { FC, memo, PropsWithChildren } from 'react';
import { Animated, View, ViewProps } from 'react-native';
import { useFlexProps } from './useFlexProps';
import { FlexProps } from './types';

type Props = FlexProps & ViewProps;

export const FlexView: FC<PropsWithChildren<Props>> = memo(props => {
  const { ownProps, style, animated } = useFlexProps(props);

  const Component = animated ? Animated.View : View;

  return <Component style={style} {...ownProps} />;
});

export const Col: FC<PropsWithChildren<Props>> = memo(props => (
  <FlexView col={true} {...props} />
));
export const Row: FC<PropsWithChildren<Props>> = memo(props => (
  <FlexView row={true} {...props} />
));
