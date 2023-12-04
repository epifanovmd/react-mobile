import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BankTransferInIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 15V12H5V10L9 13.5L5 17V15H2ZM22 8.7V10H10V8.7L16 5L22 8.7ZM10 17H22V19H10V17ZM15 11H17V16H15V11ZM11 11H13V16H11V11ZM19 11H21V16H19V11Z" />
    </Svg>
  );
};
