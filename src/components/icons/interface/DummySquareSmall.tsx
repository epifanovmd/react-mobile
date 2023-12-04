import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DummySquareSmallIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M8 11.2002V12.8002C8 13.9203 8 14.4801 8.21799 14.9079C8.40973 15.2842 8.71547 15.5905 9.0918 15.7822C9.5192 16 10.079 16 11.1969 16H12.8031C13.921 16 14.48 16 14.9074 15.7822C15.2837 15.5905 15.5905 15.2842 15.7822 14.9079C16 14.4805 16 13.9215 16 12.8036V11.1969C16 10.079 16 9.5192 15.7822 9.0918C15.5905 8.71547 15.2837 8.40973 14.9074 8.21799C14.4796 8 13.9203 8 12.8002 8H11.2002C10.0801 8 9.51962 8 9.0918 8.21799C8.71547 8.40973 8.40973 8.71547 8.21799 9.0918C8 9.51962 8 10.0801 8 11.2002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
