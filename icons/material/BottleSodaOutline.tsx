import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BottleSodaOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.4 9.58C12.9 7.89 13 4 13 4H14V2H10V4H11C11 4 11.1 7.89 9.6 9.58C9.41102 9.76523 9.26068 9.98612 9.15769 10.2299C9.0547 10.4736 9.0011 10.7354 9 11V20C9 20.5304 9.21071 21.0391 9.58579 21.4142C9.96086 21.7893 10.4696 22 11 22H13C13.5304 22 14.0391 21.7893 14.4142 21.4142C14.7893 21.0391 15 20.5304 15 20V11C14.9989 10.7354 14.9453 10.4736 14.8423 10.2299C14.7393 9.98612 14.589 9.76523 14.4 9.58ZM13 20H11V11L11.1 10.91C11.4617 10.4824 11.7644 10.0081 12 9.5C12.2356 10.0081 12.5383 10.4824 12.9 10.91L13 11V20Z" />
    </Svg>
  );
};
