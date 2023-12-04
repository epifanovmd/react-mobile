import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WindowTerminalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M4 6H20M16 16H13M8 12L10 14L8 16M3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.921 21 18.48 20.7822 18.9074C20.5905 19.2837 20.2837 19.5905 19.9074 19.7822C19.48 20 18.921 20 17.8031 20L6.19694 20C5.079 20 4.51921 20 4.0918 19.7822C3.71547 19.5905 3.40973 19.2837 3.21799 18.9074C3 18.4796 3 17.9203 3 16.8002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
