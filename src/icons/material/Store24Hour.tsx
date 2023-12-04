import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Store24HourIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 12H15V10H13V7H14V9H15V7H16V12ZM11 10H9V11H11V12H8V9H10V8H8V7H11V10ZM19 7V4H5V7H2V20H10V16H14V20H22V7H19Z" />
    </Svg>
  );
};
