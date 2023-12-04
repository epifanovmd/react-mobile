import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ChartSankeyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 5H4V2H2V22H22V20H4V9C8.09 9 10.13 11 12.29 13.21C14.45 15.42 17.09 18 22 18V16C17.91 16 15.87 14 13.71 11.79C11.55 9.58 8.91 7 4 7H22V5Z" />
    </Svg>
  );
};
