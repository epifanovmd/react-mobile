import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ChevronDoubleRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.59009 7.41L7.00009 6L13.0001 12L7.00009 18L5.59009 16.59L10.1701 12L5.59009 7.41ZM11.5901 7.41L13.0001 6L19.0001 12L13.0001 18L11.5901 16.59L16.1701 12L11.5901 7.41Z" />
    </Svg>
  );
};
