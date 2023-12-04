import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewModuleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 5V18H21V5H4ZM14 7V10.5H11V7H14ZM6 7H9V10.5H6V7ZM6 16V12.5H9V16H6ZM11 16V12.5H14V16H11ZM19 16H16V12.5H19V16ZM16 10.5V7H19V10.5H16Z" />
    </Svg>
  );
};
