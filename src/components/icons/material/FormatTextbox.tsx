import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatTextboxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 7V3H17V4H7V3H3V7H4V17H3V21H7V20H17V21H21V17H20V7H21ZM18 4H20V6H18V4ZM4 4H6V6H4V4ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM18 17H17V18H7V17H6V7H7V6H17V7H18V17ZM16 8V10H13V16H11V10H8V8H16Z" />
    </Svg>
  );
};
