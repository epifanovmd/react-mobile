import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ToslinkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 10V7L17 4H7L4 7V10C2.9 10 2 10.9 2 12C2 13.1 2.9 14 4 14V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V14C21.11 14 22 13.11 22 12C22 10.89 21.11 10 20 10ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM14 12C14 13.11 13.11 14 12 14C10.89 14 10 13.11 10 12C10 10.89 10.9 10 12 10C13.1 10 14 10.9 14 12Z" />
    </Svg>
  );
};
