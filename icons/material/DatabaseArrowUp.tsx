import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DatabaseArrowUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 13C16.83 13 14.93 14.16 13.88 15.89C13.28 15.96 12.65 16 12 16C7.58 16 4 14.21 4 12V9C4 11.21 7.58 13 12 13C16.42 13 20 11.21 20 9V12C20 12.36 19.9 12.71 19.72 13.05C19.5 13 19.24 13 19 13ZM12 11C16.42 11 20 9.21 20 7C20 4.79 16.42 3 12 3C7.58 3 4 4.79 4 7C4 9.21 7.58 11 12 11ZM13.1 17.96C12.74 18 12.37 18 12 18C7.58 18 4 16.21 4 14V17C4 19.21 7.58 21 12 21C12.46 21 12.9 21 13.33 20.94C13.12 20.33 13 19.68 13 19C13 18.64 13.04 18.3 13.1 17.96ZM19 15L16 18H18V22H20V18H22L19 15Z" />
    </Svg>
  );
};