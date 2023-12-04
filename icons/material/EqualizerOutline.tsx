import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EqualizerOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 21H9V3H15V21ZM11 19H13V5H11V19ZM8 21H2V11H8V21ZM4 19H6V13H4V19ZM22 21H16V8H22V21ZM18 19H20V10H18V19Z" />
    </Svg>
  );
};
