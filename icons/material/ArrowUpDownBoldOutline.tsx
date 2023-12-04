import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowUpDownBoldOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 10H22L12 0L2 10H8V14H2L12 24L22 14H16V10ZM14 16H17L12 21L7 16H10V8H7L12 3L17 8H14V16Z" />
    </Svg>
  );
};
