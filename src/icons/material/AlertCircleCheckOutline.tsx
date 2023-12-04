import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlertCircleCheckOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18.75 22.16L16 19.16L17.16 18L18.75 19.59L22.34 16L23.5 17.41L18.75 22.16ZM11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C17.5 2 22 6.5 22 12L21.92 13.31C21.31 13.11 20.67 13 19.94 13L20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C12.71 20 13.39 19.91 14.05 19.74C14.13 20.42 14.33 21.06 14.62 21.65C13.78 21.88 12.9 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.47 2 12 2Z" />
    </Svg>
  );
};
