import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FinanceIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 16.5L3 19.44V11H6V16.5ZM11 14.66L9.43 13.32L8 14.64V7H11V14.66ZM16 13L13 16V3H16V13ZM18.81 12.81L17 11H22V16L20.21 14.21L13 21.36L9.53 18.34L5.75 22H3L9.47 15.66L13 18.64" />
    </Svg>
  );
};
