import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TimelineCheckOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 4H10C8.9 4 8 4.89 8 6V10L6 12L8 14V18C8 19.11 8.9 20 10 20H22C23.11 20 24 19.11 24 18V6C24 4.89 23.11 4 22 4ZM22 18H10V6H22V18ZM4 8H2V2H4V8ZM2 16H4V22H2V16ZM5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12ZM15 15.08L12.25 12.08L13.41 10.92L15 12.5L18.59 8.92L19.75 10.33L15 15.08Z" />
    </Svg>
  );
};
