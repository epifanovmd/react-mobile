import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SendOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 6.03L11.5 9.25L4 8.25V6.03ZM11.5 14.75L4 17.97V15.75L11.5 14.75ZM2 3V10L17 12L2 14V21L23 12L2 3Z" />
    </Svg>
  );
};
