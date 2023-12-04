import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SquareCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M16.0003 9L10.667 15L8 12M3 17.8002V6.2002C3 5.08009 3 4.51962 3.21799 4.0918C3.40973 3.71547 3.71547 3.40973 4.0918 3.21799C4.51962 3 5.08009 3 6.2002 3H17.8002C18.9203 3 19.4796 3 19.9074 3.21799C20.2837 3.40973 20.5905 3.71547 20.7822 4.0918C21 4.5192 21 5.07899 21 6.19691V17.8036C21 18.9215 21 19.4805 20.7822 19.9079C20.5905 20.2842 20.2837 20.5905 19.9074 20.7822C19.48 21 18.921 21 17.8031 21H6.19691C5.07899 21 4.5192 21 4.0918 20.7822C3.71547 20.5905 3.40973 20.2842 3.21799 19.9079C3 19.4801 3 18.9203 3 17.8002Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
