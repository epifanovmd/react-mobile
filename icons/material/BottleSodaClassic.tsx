import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BottleSodaClassicIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 13.77C14.6874 14.0513 14.4374 14.3952 14.2663 14.7794C14.0952 15.1636 14.0068 15.5794 14.0068 16C14.0068 16.4206 14.0952 16.8364 14.2663 17.2206C14.4374 17.6048 14.6874 17.9487 15 18.23V20C15 20.5304 14.7893 21.0391 14.4142 21.4142C14.0391 21.7893 13.5304 22 13 22H11C10.4696 22 9.96086 21.7893 9.58579 21.4142C9.21071 21.0391 9 20.5304 9 20V18.23C9.31262 17.9487 9.56259 17.6048 9.7337 17.2206C9.90481 16.8364 9.99324 16.4206 9.99324 16C9.99324 15.5794 9.90481 15.1636 9.7337 14.7794C9.56259 14.3952 9.31262 14.0513 9 13.77V9C9.99656 7.49404 10.6487 5.78683 10.91 4H10V2H14V4H13.09C13.3513 5.78683 14.0034 7.49404 15 9V13.77Z" />
    </Svg>
  );
};
