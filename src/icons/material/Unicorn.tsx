import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UnicornIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.9999 5L21.1099 6.34C21.6499 6.7 21.9999 7.31 21.9999 8V11.5L20.4999 12L18.9599 9.54C18.8299 9.33 18.4999 9.42 18.4999 9.67V13.25C18.4999 14.23 18.1099 15.11 17.4999 15.78V22H14.9999V17C14.9199 17 14.8399 17 14.7499 17C14.5399 17 14.3299 16.97 14.1299 16.94L9.4499 16.16L8.5699 18.12L9.5399 22H6.9599L6.0399 18.3C5.9699 18.03 5.9999 17.74 6.1099 17.5L6.9999 15.5C6.1199 14.92 5.5299 13.94 5.4999 12.81C5.4599 12.96 5.4399 13.18 5.4699 13.5C5.4999 13.94 5.6099 14.59 5.5399 15.31C5.4999 16.03 5.1799 16.77 4.7599 17.26C4.3199 17.75 3.8499 18.09 3.3499 18.35L2.6499 17.65C2.8399 17.18 3.0299 16.76 3.0699 16.37C3.1299 16 3.0599 15.7 2.9499 15.43L2.4199 14.3C2.2099 13.79 1.9499 13.05 1.9999 12.18C2.0299 11.33 2.4999 10.22 3.3899 9.61C4.2899 9 5.2599 8.91 6.0499 9.08C6.5499 9.18 7.0599 9.42 7.4999 9.76C7.8699 9.59 8.2999 9.5 8.7499 9.5H14.4999V9C14.4999 6.79 16.2899 5 18.4999 5L21.9999 2L20.9999 5H21.9999Z" />
    </Svg>
  );
};
