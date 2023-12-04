import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatOverlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 5H19V3H5V5ZM9.62 16L12 9.67L14.37 16H9.62ZM11 7L5.5 21H7.75L8.87 18H15.12L16.25 21H18.5L13 7H11Z" />
    </Svg>
  );
};
