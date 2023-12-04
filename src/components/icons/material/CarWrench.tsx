import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CarWrenchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.96 16.45C20.97 16.3 21 16.15 21 16V16.5L20.96 16.45ZM11 16C11 16.71 11.15 17.39 11.42 18H6V19C6 19.55 5.55 20 5 20H4C3.45 20 3 19.55 3 19V11L5.08 5C5.28 4.42 5.84 4 6.5 4H17.5C18.16 4 18.72 4.42 18.92 5L21 11V16C21 13.24 18.76 11 16 11C13.24 11 11 13.24 11 16ZM8 13.5C8 12.67 7.33 12 6.5 12C5.67 12 5 12.67 5 13.5C5 14.33 5.67 15 6.5 15C7.33 15 8 14.33 8 13.5ZM19 10L17.5 5.5H6.5L5 10H19ZM22.87 21.19L18.76 17.08C19.17 16.04 18.94 14.82 18.08 13.97C17.18 13.06 15.83 12.88 14.74 13.38L16.68 15.32L15.33 16.68L13.34 14.73C12.8 15.82 13.05 17.17 13.93 18.08C14.79 18.94 16 19.16 17.05 18.76L21.16 22.86C21.34 23.05 21.61 23.05 21.79 22.86L22.83 21.83C23.05 21.65 23.05 21.33 22.87 21.19Z" />
    </Svg>
  );
};
