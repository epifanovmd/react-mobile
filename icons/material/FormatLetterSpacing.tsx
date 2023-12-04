import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatLetterSpacingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.4 10.7H18.5L16.5 5.3L14.4 10.7ZM15.6 3H17.3L22 15H20.1L19.1 12.4H13.7L12.7 15H10.8L15.6 3ZM11.2 3H13.1L8.4 15H6.7L2 3H3.9L7.5 12.7L11.2 3ZM19 22V20H5V22L2 19L5 16V18H19V16L22 19L19 22Z" />
    </Svg>
  );
};