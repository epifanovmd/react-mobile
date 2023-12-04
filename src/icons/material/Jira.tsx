import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const JiraIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.53 2C11.53 4.4 13.5 6.35 15.88 6.35H17.66V8.05C17.66 10.45 19.6 12.39 22 12.4V2.84C22 2.61722 21.9115 2.40356 21.754 2.24603C21.5964 2.0885 21.3828 2 21.16 2H11.53ZM6.77 6.8C6.78 9.19 8.72 11.13 11.11 11.14H12.91V12.86C12.92 15.25 14.86 17.19 17.25 17.2V7.63C17.24 7.17 16.88 6.81 16.42 6.8H6.77ZM2 11.6C2 14 3.95 15.94 6.35 15.94H8.13V17.66C8.14 20.05 10.08 22 12.47 22V12.43C12.47 12.2072 12.3815 11.9936 12.224 11.836C12.0664 11.6785 11.8528 11.59 11.63 11.59L2 11.6Z" />
    </Svg>
  );
};
