import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PerspectiveLessIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.56 12L19.23 20H4.78L7.44 12H16.56ZM7 1L3 5L7 9V6H11V4H7V1ZM17 1V4H13V6H17V9L21 5L17 1ZM18 10H6L2 22H22L18 10Z" />
    </Svg>
  );
};
