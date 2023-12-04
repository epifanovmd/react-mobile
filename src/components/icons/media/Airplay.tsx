import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AirplayIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M6.24957 17H6.19691C5.07858 17 4.5192 17 4.0918 16.7822C3.71547 16.5905 3.40973 16.2837 3.21799 15.9074C3 15.4796 3 14.9203 3 13.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V13.8031C21 14.921 21 15.48 20.7822 15.9074C20.5905 16.2837 20.2841 16.5905 19.9077 16.7822C19.4803 17 18.921 17 17.8031 17H17.7529M16 20H8L12 15L16 20Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
