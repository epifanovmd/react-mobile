import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RomanNumeral8Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 7L3 17H5L7 7H5L4 12L3 7H1ZM12 7V9H11V15H12V17H8V15H9V9H8V7H12ZM17 7V9H16V15H17V17H13V15H14V9H13V7H17ZM22 7V9H21V15H22V17H18V15H19V9H18V7H22Z" />
    </Svg>
  );
};
