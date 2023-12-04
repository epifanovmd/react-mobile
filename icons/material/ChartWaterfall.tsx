import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ChartWaterfallIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2H4V20H22V22H2V2ZM17 2H20V18H17V2ZM6 11H9V18H6V11ZM13 3H16V7H13V3ZM10 8H13V12H10V8Z" />
    </Svg>
  );
};
