import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TimelineRemoveOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 8H2V2H4V8ZM2 22H4V16H2V22ZM3 10C1.9 10 1 10.9 1 12C1 13.11 1.9 14 3 14C4.11 14 5 13.11 5 12C5 10.9 4.11 10 3 10ZM13.88 15.54L16 13.41L18.12 15.53L19.53 14.12L17.41 12L19.53 9.88L18.12 8.47L16 10.59L13.88 8.47L12.47 9.88L14.59 12L12.47 14.12L13.88 15.54ZM24 6V18C24 19.11 23.11 20 22 20H10C8.9 20 8 19.11 8 18V14L6 12L8 10V6C8 4.89 8.9 4 10 4H22C23.11 4 24 4.89 24 6ZM22 6H10V18H22V6Z" />
    </Svg>
  );
};
