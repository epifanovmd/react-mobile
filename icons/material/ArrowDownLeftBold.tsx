import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowDownLeftBoldIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 3V7H13.5C11.57 7 10 8.57 10 10.5V13H14L8 20L2 13H6V10.5C6 6.36 9.36 3 13.5 3H21Z" />
    </Svg>
  );
};