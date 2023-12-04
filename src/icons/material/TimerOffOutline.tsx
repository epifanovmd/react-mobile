import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TimerOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 20C10.1435 20 8.36301 19.2625 7.05025 17.9497C5.7375 16.637 5 14.8565 5 13C5 11.72 5.35 10.5 5.95 9.5L15.5 19.04C14.5 19.65 13.28 20 12 20ZM3 4L1.75 5.27L4.5 8.03C3.55 9.45 3 11.16 3 13C3 15.3869 3.94821 17.6761 5.63604 19.364C7.32387 21.0518 9.61305 22 12 22C13.84 22 15.55 21.45 17 20.5L19.5 23L20.75 21.73L13.04 14L3 4ZM11 9.44L13 11.44V8H11V9.44ZM15 1H9V3H15V1ZM19.04 4.55L17.62 5.97C16.07 4.74 14.12 4 12 4C10.17 4 8.47 4.55 7.05 5.5L8.5 6.94C9.53 6.35 10.73 6 12 6C13.8565 6 15.637 6.7375 16.9497 8.05025C18.2625 9.36301 19 11.1435 19 13C19 14.27 18.65 15.47 18.06 16.5L19.5 17.94C20.45 16.53 21 14.83 21 13C21 10.88 20.26 8.93 19.03 7.39L20.45 5.97L19.04 4.55Z" />
    </Svg>
  );
};
