import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SendCheckOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 3V10L17 12L2 14V21L23 12L2 3ZM4 6.03L11.53 9.25L4 8.25V6.03ZM11.53 14.75L4 17.97V15.75L11.53 14.75ZM22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17L22 15.5Z" />
    </Svg>
  );
};
