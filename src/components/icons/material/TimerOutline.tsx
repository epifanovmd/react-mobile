import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TimerOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 20C10.1435 20 8.36301 19.2625 7.05025 17.9497C5.7375 16.637 5 14.8565 5 13C5 11.1435 5.7375 9.36301 7.05025 8.05025C8.36301 6.7375 10.1435 6 12 6C13.8565 6 15.637 6.7375 16.9497 8.05025C18.2625 9.36301 19 11.1435 19 13C19 14.8565 18.2625 16.637 16.9497 17.9497C15.637 19.2625 13.8565 20 12 20ZM19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C9.61305 4 7.32387 4.94821 5.63604 6.63604C3.94821 8.32387 3 10.6131 3 13C3 15.3869 3.94821 17.6761 5.63604 19.364C7.32387 21.0518 9.61305 22 12 22C17 22 21 17.97 21 13C21 10.88 20.26 8.93 19.03 7.39ZM11 14H13V8H11V14ZM15 1H9V3H15V1Z" />
    </Svg>
  );
};
