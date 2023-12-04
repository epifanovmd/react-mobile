import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const IdeogramCjkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 4V6H4V10H6V8H18V10H20V6H13V4H11ZM8 10V12H13.59L11.59 14H4V16H11V18H10V20H13V16H20V14H14.21L16 12.21V10H8Z" />
    </Svg>
  );
};
