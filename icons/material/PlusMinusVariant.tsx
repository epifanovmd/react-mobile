import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PlusMinusVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 7H6V4H8V7H11V9H8V12H6V9H3V7ZM13 15H21V17H13V15ZM16.04 3H18.35L7.96 21H5.65L16.04 3Z" />
    </Svg>
  );
};
