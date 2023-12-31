import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HorseIcon: FC<FlexSvgProps> = ({
  height = 24,
  width = 24,
  scale,
  opacity,
  translateY,
  translateX,
  color = '#ffffff',
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  ...rest
}) => {
  const { style, ownProps } = useFlexProps(rest);

  return (
    <Svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      scale={scale}
      opacity={opacity}
      translateY={translateY}
      translateX={translateX}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      style={style}
      {...ownProps}
      fill={ownProps?.fill || color || '#ffffff'}
    >
      <Path d="M21.9999 6V9.5L20.4999 10L18.9599 7.54C18.8299 7.33 18.4999 7.42 18.4999 7.67V11.25C18.4999 12.23 18.1099 13.11 17.4999 13.78V21H14.9999V15C14.9199 15 14.8399 15 14.7499 15C14.5399 15 14.3299 14.97 14.1299 14.94L9.6899 14.2L8.5699 16.21L9.5299 21H6.9999L5.9999 16.25C5.9699 15.95 5.9999 15.65 6.1599 15.39L7.1799 13.58C6.1999 13.03 5.5299 12 5.4999 10.81C5.4599 10.96 5.4399 11.18 5.4699 11.5C5.4999 11.94 5.6099 12.59 5.5399 13.31C5.4999 14.03 5.1699 14.77 4.7499 15.26C4.3199 15.75 3.8499 16.09 3.3499 16.35L2.6499 15.65C2.8399 15.18 3.0299 14.76 3.0699 14.37C3.1299 14 3.0599 13.7 2.9499 13.43L2.4199 12.3C2.2099 11.79 1.9499 11.05 1.9999 10.18C2.0299 9.33 2.4999 8.22 3.3899 7.61C4.2899 7 5.2599 6.92 6.0499 7.08C6.5499 7.18 7.0599 7.42 7.4999 7.76C7.8699 7.59 8.2999 7.5 8.7499 7.5H14.4999V7C14.4999 4.79 16.2899 3 18.4999 3H21.9999L21.1099 4.34C21.6499 4.7 21.9999 5.31 21.9999 6Z" />
    </Svg>
  );
};
