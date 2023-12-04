import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BellCheckOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.75 21.16L15 18.16L16.16 17L17.75 18.59L21.34 15L22.5 16.41L17.75 21.16ZM10 21H12.8C13.04 21.41 13.33 21.79 13.65 22.13C13.29 22.66 12.69 23 12 23C10.9 23 10 22.11 10 21ZM3 20V19L5 17V11C5 7.9 7.03 5.18 10 4.29V4C10 2.9 10.9 2 12 2C13.11 2 14 2.9 14 4V4.29C16.97 5.18 19 7.9 19 11V12.08L18 12L17 12.08V11C17 8.24 14.76 6 12 6C9.24 6 7 8.24 7 11V18H12C12 18.7 12.12 19.37 12.34 20H3Z" />
    </Svg>
  );
};
