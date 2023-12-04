import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BankCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.5 17V10H13.5V16.61C13.44 16.73 13.4 16.87 13.35 17H10.5ZM19 13C19.17 13 19.33 13 19.5 13.03V10H16.5V13.55C17.26 13.2 18.11 13 19 13ZM7.5 17V10H4.5V17H7.5ZM21.5 6L12 1L2.5 6V8H21.5V6ZM2.5 19V22H13.81C13.3 21.12 13 20.09 13 19H2.5ZM21.34 16L17.75 19.59L16.16 18L15 19.16L17.75 22.16L22.5 17.41L21.34 16Z" />
    </Svg>
  );
};
