import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ViewQuiltOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 5V18H21V5H4ZM6 16V7H9V16H6ZM11 16V12.5H14V16H11ZM19 16H16V12.5H19V16ZM11 10.5V7H19V10.5H11Z" />
    </Svg>
  );
};
