import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const InvertColorsOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.65 20.8695L18.3 18.4995L12 12.2295L8.44 8.65953L7 7.24953L4.27 4.49953L3 5.76953L5.78 8.54953C3.23 11.6895 3.42 16.3095 6.34 19.2395C7.9 20.7995 9.95 21.5795 12 21.5795C13.79 21.5795 15.57 20.9995 17.03 19.7995L19.73 22.4995L21 21.2295L20.65 20.8695ZM12 19.5895C10.4 19.5895 8.89 18.9695 7.76 17.8295C6.62 16.6895 6 15.1895 6 13.5895C6 12.2695 6.43 10.9995 7.21 9.99953L12 14.7695V19.5895ZM12 5.09953V9.67953L19.25 16.9395C20.62 13.9995 20.09 10.3695 17.65 7.92953L12 2.26953L8.3 5.96953L9.71 7.37953L12 5.09953Z" />
    </Svg>
  );
};
