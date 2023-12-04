import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MessageMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 2C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H6L2 22V4C2 2.89 2.9 2 4 2H20ZM8 9V11H16V9H8Z" />
    </Svg>
  );
};
