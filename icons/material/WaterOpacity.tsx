import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const WaterOpacityIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 14V12H17.61C17.85 12.71 18 13.39 18 14H16ZM15.58 8C15.12 7.29 14.65 6.61 14.2 6H14V8H15.58ZM16 12V10H14V12H16ZM16 8.68V10H16.74C16.5 9.56 16.26 9.11 16 8.68ZM12 16V14H14V12H12V10H14V8H12V6H14V5.73C12.9 4.26 12 3.25 12 3.25C12 3.25 6 10 6 14C6 17.31 8.69 20 12 20V18H14V16H12ZM14 19.65C14.75 19.39 15.42 19 16 18.46V18H14V19.65ZM14 16H16V14H14V16ZM16 18H16.46C17 17.42 17.39 16.75 17.65 16H16V18Z" />
    </Svg>
  );
};
