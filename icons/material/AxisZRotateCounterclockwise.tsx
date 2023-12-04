import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AxisZRotateCounterclockwiseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 12L14 16L10 20V16.9C5.44 16.44 2 14.42 2 12C2 9.58 5.44 7.56 10 7.1V9.09C6.55 9.43 4 10.6 4 12C4 13.4 6.55 14.57 10 14.91V12ZM20 12C20 10.6 17.45 9.43 14 9.09V7.1C18.56 7.56 22 9.58 22 12C22 14.16 19.26 16 15.42 16.7L16.12 16L14.92 14.79C17.89 14.36 20 13.27 20 12ZM11 2H13V13L11 11V2ZM11 22V21L13 19V22H11Z" />
    </Svg>
  );
};