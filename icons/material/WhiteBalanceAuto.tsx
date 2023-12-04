import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const WhiteBalanceAutoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.3 16L9.6 14H6.4L5.7 16H3.8L7 7H9L12.2 16H10.3ZM22 7L20.8 13.29L19.3 7H17.7L16.21 13.29L15 7H14.24C12.77 5.17 10.5 4 8 4C5.87827 4 3.84344 4.84285 2.34315 6.34315C0.842855 7.84344 0 9.87827 0 12C0 14.1217 0.842855 16.1566 2.34315 17.6569C3.84344 19.1571 5.87827 20 8 20C11.13 20 13.84 18.19 15.15 15.57L15.25 16H17L18.5 9.9L20 16H21.75L23.8 7H22ZM6.85 12.65H9.15L8 9L6.85 12.65Z" />
    </Svg>
  );
};
