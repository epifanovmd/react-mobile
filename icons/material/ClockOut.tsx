import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ClockOutIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 1L19.8 2.79L15.79 6.79L17.21 8.21L21.21 4.21L23 6V1H18ZM12 8C8.14 8 5 11.13 5 15C5 16.8565 5.7375 18.637 7.05025 19.9497C8.36301 21.2625 10.1435 22 12 22C15.86 22 19 18.87 19 15C19 13.1435 18.2625 11.363 16.9497 10.0503C15.637 8.7375 13.8565 8 12 8ZM12 10.15C14.67 10.15 16.85 12.32 16.85 15C16.85 15.6369 16.7246 16.2676 16.4808 16.856C16.2371 17.4444 15.8798 17.9791 15.4295 18.4295C14.9791 18.8798 14.4444 19.2371 13.856 19.4808C13.2676 19.7246 12.6369 19.85 12 19.85C9.32 19.85 7.15 17.68 7.15 15C7.15 13.7137 7.66098 12.4801 8.57053 11.5705C9.48008 10.661 10.7137 10.15 12 10.15ZM11 12V15.69L14.19 17.53L14.94 16.23L12.5 14.82V12" />
    </Svg>
  );
};
