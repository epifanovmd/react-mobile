import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpaceInvadersIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 6H5V4H7V6ZM17 6H19V4H17V6ZM23 12V18H21V14H19V18H17V16H7V18H5V14H3V18H1V12H3V10H5V8H7V6H9V8H15V6H17V8H19V10H21V12H23ZM15 10V12H17V10H15ZM7 12H9V10H7V12ZM11 18H7V20H11V18ZM17 18H13V20H17V18Z" />
    </Svg>
  );
};
