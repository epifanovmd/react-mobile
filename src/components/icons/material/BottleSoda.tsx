import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BottleSodaIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 11V20C15 20.5304 14.7893 21.0391 14.4142 21.4142C14.0391 21.7893 13.5304 22 13 22H11C10.4696 22 9.96086 21.7893 9.58579 21.4142C9.21071 21.0391 9 20.5304 9 20V11C9.0011 10.7354 9.0547 10.4736 9.15769 10.2299C9.26068 9.98612 9.41102 9.76523 9.6 9.58C11.1 7.89 11 4 11 4H10V2H14V4H13C13 4 12.9 7.89 14.4 9.58C14.589 9.76523 14.7393 9.98612 14.8423 10.2299C14.9453 10.4736 14.9989 10.7354 15 11Z" />
    </Svg>
  );
};
