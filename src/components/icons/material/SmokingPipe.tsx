import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SmokingPipeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 13C14.89 13 14 13.89 14 15V18H13C12 18 11 17.92 10.3 17.23L6.53 13.47C5.6 12.53 4.33 12 3 12H2V14H3C3.8 14 4.56 14.32 5.12 14.88L8.89 18.65C11.72 21.5 13 22 16 22H18C20.21 22 22 20.21 22 18V15C22 13.89 21.11 13 20 13H16ZM14 7.2H12.5C11.45 7.12 10.65 6.25 10.65 5.2C10.67 4.22 11.5 3.43 12.46 3.45H12.5V2C10.65 2 9.15 3.5 9.15 5.35C9.15 7.2 10.65 8.7 12.5 8.7H14C15.07 8.66 15.96 9.5 16 10.56C16 10.61 16 10.65 16 10.7V12H17.5V10.36C17.42 8.53 15.88 7.12 14.05 7.2H14ZM20 9.76V12H18.5V9.77V9.7C18.5 7.5 16.71 5.7 14.5 5.7V4.2C15.5 4.2 16.35 3.37 16.35 2.35C16.35 2.23 16.34 2.11 16.32 2H17.79C17.89 3 17.58 4 16.82 4.73H16.85C18.78 5.66 20 7.62 20 9.76Z" />
    </Svg>
  );
};
