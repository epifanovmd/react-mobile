import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LampsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 2L12 9H2L4 2H10ZM6 10H8V20H11V22H3V20H6V10ZM20 8L22 15H12L14 8H20ZM16 16H18V20H21V22H13V20H16V16Z" />
    </Svg>
  );
};
