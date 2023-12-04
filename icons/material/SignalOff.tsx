import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SignalOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 3V16.18L21 19.18V3H18ZM4.28 5L3 6.27L10.73 14H8V21H11V14.27L13 16.27V21H16V19.27L19.73 23L21 21.72L4.28 5ZM13 9V11.18L16 14.18V9H13ZM3 18V21H6V18H3Z" />
    </Svg>
  );
};
