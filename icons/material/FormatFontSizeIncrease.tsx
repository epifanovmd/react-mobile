import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatFontSizeIncreaseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.12 14L7.5 7.67L9.87 14H5.12ZM6.5 5L1 19H3.25L4.37 16H10.62L11.75 19H14L8.5 5H6.5ZM18 7L13 12.07L14.41 13.5L17 10.9V17H19V10.9L21.59 13.5L23 12.07L18 7Z" />
    </Svg>
  );
};
