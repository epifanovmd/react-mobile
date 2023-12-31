import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HammerSickleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.9999 20.59L20.5899 22L17.4499 18.86C16.8899 19.23 16.2999 19.56 15.6599 19.78C13.9999 20.36 12.1999 20.4 10.5299 19.88C9.49988 19.58 8.55988 19.05 7.74988 18.37L4.55988 21.56C3.99988 22.15 3.02988 22.15 2.43988 21.56C1.85988 21 1.85988 20 2.43988 19.44L5.81988 16.06L8.46988 15.54C9.18988 16.45 10.1899 17.13 11.2799 17.5C12.4399 17.85 13.7199 17.84 14.8699 17.46C15.1599 17.37 15.4399 17.26 15.6999 17.12L7.59988 9L5.82988 10.78L2.99988 7.95L7.94988 3L12.1899 4.41L8.99988 7.6L17.3099 15.89C17.4999 15.71 17.6499 15.53 17.7999 15.33C19.2999 13.36 19.4199 10.42 18.0899 8C16.7799 5.57 14.4999 3.55 11.9999 2C13.4099 2.5 14.7599 3.17 15.9999 4.04C17.2399 4.91 18.4299 5.93 19.3299 7.25C20.2299 8.54 20.8699 10.12 20.9999 11.79C21.0999 13.47 20.6599 15.23 19.6999 16.65C19.4999 17 19.2399 17.28 18.9999 17.56L21.9999 20.59Z" />
    </Svg>
  );
};
