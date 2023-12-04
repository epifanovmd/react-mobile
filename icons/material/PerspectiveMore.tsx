import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PerspectiveMoreIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.56 12L19.23 20H4.78L7.44 12H16.56ZM17 1L13 5L17 9V6H21V4H17V1ZM7 1V4H3V6H7V9L11 5L7 1ZM18 10H6L2 22H22L18 10Z" />
    </Svg>
  );
};
