import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const IceCreamIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.5 6.05C17.25 3.22 14.89 1 12 1C9.11 1 6.75 3.22 6.5 6.05C5.09 6.28 4 7.5 4 9C4 10.66 5.34 12 7 12L12 22L17 12C18.66 12 20 10.66 20 9C20 7.5 18.91 6.28 17.5 6.05ZM12 17.53L8.89 11.31C8.95 11.26 9 11.21 9.08 11.16C9.93 11.69 10.93 12 12 12C13.07 12 14.07 11.69 14.92 11.16C15 11.21 15.05 11.26 15.11 11.31L12 17.53Z" />
    </Svg>
  );
};
