import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirplaneSearchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.55 9.62999L10.9 12.22C11.5 11.17 12.41 10.31 13.5 9.73999L12.73 6.44999L16.62 2.55999C17.2 1.96999 17.2 0.999993 16.62 0.437993C16.04 -0.124007 15.08 -0.148007 14.5 0.437993L10.61 4.32999L1.41 2.20999L0 3.61999L7.43 7.49999L3.54 11.4L1.06 11.05L0 12.11L3.18 13.87L4.95 17.06L6 16L5.66 13.5L9.55 9.62999ZM16.5 11C19 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5C12 13 14 11 16.5 11ZM16.5 13C15.12 13 14 14.12 14 15.5C14 16.88 15.12 18 16.5 18C17.88 18 19 16.88 19 15.5C19 14.12 17.88 13 16.5 13Z" />
    </Svg>
  );
};
