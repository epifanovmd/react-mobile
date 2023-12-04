import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CountertopOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 10H18V7C18 5.34 16.66 4 15 4C13.34 4 12 5.34 12 7H14C14 6.45 14.45 6 15 6C15.55 6 16 6.45 16 7V10H8C9.1 10 10 9.1 10 8V4H4V8C4 9.1 4.9 10 6 10H2V12H4V20H20V12H22V10ZM6 6H8V8H6V6ZM6 18V12H11V18H6ZM18 18H13V12H18V18Z" />
    </Svg>
  );
};
