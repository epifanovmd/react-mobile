import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BankIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.5 1L2 6V8H21V6L11.5 1ZM16 10V17H19V10H16ZM2 22H21V19H2V22ZM10 10V17H13V10H10ZM4 10V17H7V10H4Z" />
    </Svg>
  );
};
