import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const IntegratedCircuitChipIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 4H20C21.11 4 22 4.89 22 6V8H18.59L16 10.59V14.59L14 16.59V20H10V16.59L8 14.59V9.41L10 7.41V4ZM18 11.41V14H22V10H19.41L18 11.41ZM6.59 8L8 6.59V4H4C2.89 4 2 4.89 2 6V8H6.59ZM6 14V10H2V14H6ZM8 17.41L6.59 16H2V18C2 19.11 2.89 20 4 20H8V17.41ZM17.41 16L16 17.41V20H20C21.11 20 22 19.11 22 18V16H17.41Z" />
    </Svg>
  );
};
