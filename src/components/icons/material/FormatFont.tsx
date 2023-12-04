import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatFontIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 8H20V20H21V21H17V20H18V17H14L12.5 20H14V21H10V20H11L17 8ZM18 9L14.5 16H18V9ZM5 3H10C11.11 3 12 3.89 12 5V16H9V11H6V16H3V5C3 3.89 3.89 3 5 3ZM6 5V9H9V5H6Z" />
    </Svg>
  );
};
