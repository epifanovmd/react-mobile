import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PailIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.5 7.63C11.97 7.35 12.58 7.5 12.86 8C13.14 8.47 12.97 9.09 12.5 9.36L4.26999 14.11C3.78999 14.39 3.17999 14.23 2.89999 13.75C2.61999 13.27 2.78999 12.66 3.26999 12.38L11.5 7.63ZM6.99999 21L5.78999 14.97L13.21 10.69C14 10.26 14.5 9.44 14.5 8.5C14.5 7.12 13.38 6 12 6C11.53 6 11.09 6.13 10.71 6.36L4.75999 9.79L3.99999 6H2.99999V4H21V6H20L17 21H6.99999Z" />
    </Svg>
  );
};
