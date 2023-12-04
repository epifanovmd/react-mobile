import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BaseballDiamondIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.79 12.79L2 9C2 9 6 3 12 3C18 3 22 9 22 9L18.21 12.79L12 6.59L5.79 12.79ZM13.5 18H10.5V20L12 21L13.5 20V18ZM16.79 14.21L14.2 16.8C13.6 16.31 12.84 16 12 16C11.16 16 10.4 16.31 9.8 16.8L7.21 14.21L12 9.41L16.79 14.21ZM13 14C13 13.45 12.55 13 12 13C11.45 13 11 13.45 11 14C11 14.55 11.45 15 12 15C12.55 15 13 14.55 13 14Z" />
    </Svg>
  );
};
