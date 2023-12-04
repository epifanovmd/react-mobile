import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeGroupIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 16H15V22H12V17H8V22H5V16H3L10 10L17 16ZM6 2L10 6H9V9H7V6H5V9H3V6H2L6 2ZM18 3L23 8H22V12H19V9H17V12H15.34L14 10.87V8H13L18 3Z" />
    </Svg>
  );
};
