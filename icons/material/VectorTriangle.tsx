import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const VectorTriangleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 3V9H9.73L5.79 16H2V22H8V20H16V22H22V16H18.21L14.27 9H15V3H9ZM11 5H13V7H11V5ZM12 9.04L16 16.15V18H8V16.15L12 9.04ZM4 18H6V20H4V18ZM18 18H20V20H18" />
    </Svg>
  );
};
