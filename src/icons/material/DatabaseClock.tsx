import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseClockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25ZM23 16C23 19.87 19.87 23 16 23C13.61 23 11.5 21.8 10.25 20C6.18 19.79 3 18.08 3 16V13C3 14.88 5.58 16.44 9.06 16.88C9.03 16.59 9 16.3 9 16C9 15.62 9.04 15.25 9.1 14.88C5.6 14.45 3 12.88 3 11V8C3 10.09 6.2 11.8 10.27 12C10.87 11.14 11.64 10.44 12.53 9.93C12.04 9.97 11.5 10 11 10C6.58 10 3 8.21 3 6C3 3.79 6.58 2 11 2C15.42 2 19 3.79 19 6C19 7.2 17.93 8.28 16.25 9C17 9.04 17.75 9.19 18.44 9.45C18.79 9 19 8.5 19 8V9.68C21.36 10.81 23 13.21 23 16ZM21 16C21 13.24 18.76 11 16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21C18.76 21 21 18.76 21 16Z" />
    </Svg>
  );
};
