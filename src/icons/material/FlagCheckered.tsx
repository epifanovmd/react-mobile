import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlagCheckeredIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.4 6H20V16H13L12.6 14H7V21H5V4H14L14.4 6ZM14 14H16V12H18V10H16V8H14V10L13 8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14 12V14ZM11 10V8H13V10H11ZM14 10H16V12H14V10Z" />
    </Svg>
  );
};
