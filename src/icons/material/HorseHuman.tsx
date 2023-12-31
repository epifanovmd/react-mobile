import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HorseHumanIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.9999 3.5C9.9999 2.67 10.6699 2 11.4999 2C12.3299 2 12.9999 2.67 12.9999 3.5C12.9999 4.33 12.3299 5 11.4999 5C10.6699 5 9.9999 4.33 9.9999 3.5ZM21.9999 8V11.5L20.9699 11.85C20.7999 13.06 19.7599 14 18.4999 14H18.4199C18.2799 14.68 17.9499 15.29 17.4999 15.78V22H14.9999V17C14.9199 17 14.8399 17 14.7499 17C14.5399 17 14.3299 16.97 14.1299 16.94L9.6899 16.2L8.5699 18.21L9.3199 22H6.7799L5.9999 18.25C5.9699 17.95 5.9999 17.65 6.1599 17.39L7.1799 15.58C6.1999 15.03 5.5299 14 5.4999 12.81C5.4599 12.96 5.4399 13.18 5.4699 13.5C5.4999 13.94 5.6099 14.59 5.5399 15.31C5.4999 16.03 5.1699 16.77 4.7499 17.26C4.3199 17.75 3.8499 18.09 3.3499 18.35L2.6499 17.65C2.8399 17.18 3.0299 16.76 3.0699 16.37C3.1299 16 3.0599 15.7 2.9499 15.43L2.4199 14.3C2.2099 13.79 1.9499 13.05 1.9999 12.18C2.0299 11.33 2.4999 10.22 3.3899 9.61C4.2899 9 5.2599 8.91 6.0499 9.08C6.5499 9.18 7.0599 9.42 7.4999 9.76C7.8699 9.59 8.2999 9.5 8.7499 9.5H8.9999V8.11C8.9999 7.11 9.6799 6.19 10.6599 6.03C11.9199 5.82 12.9999 6.79 12.9999 8V9.5H14.4999V9C14.4999 6.79 16.2899 5 18.4999 5H21.9999L21.1099 6.34C21.6499 6.7 21.9999 7.31 21.9999 8ZM19.9999 11.2L18.9599 9.54C18.8299 9.33 18.4999 9.42 18.4999 9.67V13C19.3299 13 19.9999 12.33 19.9999 11.5V11.2Z" />
    </Svg>
  );
};
