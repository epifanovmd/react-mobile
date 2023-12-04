import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleMapsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.27 6C19.28 8.17 19.05 10.73 17.94 12.81C17 14.5 15.65 15.93 14.5 17.5C14 18.2 13.5 18.95 13.13 19.76C13 20.03 12.91 20.31 12.81 20.59C12.71 20.87 12.62 21.15 12.53 21.43C12.44 21.69 12.33 22 12 22C11.61 22 11.5 21.56 11.42 21.26C11.18 20.53 10.94 19.83 10.57 19.16C10.15 18.37 9.61996 17.64 9.07996 16.93L18.27 6ZM9.11996 8.42L5.81996 12.34C6.42996 13.63 7.33996 14.73 8.20996 15.83C8.41996 16.08 8.62996 16.34 8.82996 16.61L13 11.67L12.96 11.68C11.5 12.18 9.87996 11.44 9.29996 10C9.21996 9.83 9.15996 9.63 9.11996 9.43C9.06996 9.06 9.05996 8.79 9.11996 8.43V8.42ZM6.57996 4.62L6.56996 4.63C4.94996 6.68 4.66996 9.53 5.63996 11.94L9.62996 7.2L9.57996 7.15L6.57996 4.62ZM14.22 2.36L11 6.17L11.04 6.16C12.38 5.7 13.88 6.28 14.56 7.5C14.71 7.78 14.83 8.08 14.87 8.38C14.93 8.76 14.95 9.03 14.88 9.4V9.41L18.08 5.61C17.24 4.09 15.87 2.93 14.23 2.37L14.22 2.36ZM9.88996 6.89L13.8 2.24L13.76 2.23C13.18 2.08 12.59 2 12 2C10.03 2 8.16996 2.85 6.84996 4.31L6.82996 4.32L9.88996 6.89Z" />
    </Svg>
  );
};
