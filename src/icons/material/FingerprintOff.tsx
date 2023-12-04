import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FingerprintOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.5 4.77L2.78 3.5L20.5 21.22L19.23 22.5L16.67 19.94C15.58 19.9 14.62 19.6 13.82 19.05C12.34 18.05 11.46 16.43 11.44 14.71L10.27 13.53C10.03 13.85 9.89 14.23 9.89 14.65C9.89 16.36 10.55 17.96 11.76 19.16C12.71 20.1 13.62 20.62 15.03 21C15.3 21.08 15.45 21.36 15.38 21.62C15.33 21.85 15.12 22 14.91 22H14.78C13.19 21.54 12.15 20.95 11.06 19.88C9.66 18.5 8.89 16.64 8.89 14.66C8.89 13.97 9.14 13.33 9.56 12.83L8.5 11.77C7.78 12.54 7.34 13.55 7.34 14.66C7.34 16.1 7.66 17.43 8.27 18.5C8.91 19.66 9.35 20.15 10.12 20.93C10.31 21.13 10.31 21.44 10.12 21.64C10 21.74 9.88 21.79 9.75 21.79C9.62 21.79 9.5 21.74 9.4 21.64C8.53 20.77 8.06 20.21 7.39 19C6.7 17.77 6.34 16.27 6.34 14.66C6.34 13.28 6.89 12 7.79 11.06L6.7 9.97C6.15 10.5 5.69 11.15 5.35 11.86C4.96 12.67 4.76 13.62 4.76 14.66C4.76 15.44 4.83 16.67 5.43 18.27C5.53 18.53 5.4 18.82 5.14 18.91C4.88 19 4.59 18.87 4.5 18.62C4 17.31 3.77 16 3.77 14.66C3.77 13.46 4 12.37 4.45 11.42C4.84 10.61 5.36 9.88 6 9.26L4.97 8.24C4.58 8.63 4.22 9.05 3.89 9.5C3.81 9.65 3.66 9.72 3.5 9.72L3.21 9.63C3 9.47 2.93 9.16 3.09 8.93C3.45 8.43 3.84 7.96 4.27 7.53L1.5 4.77ZM17.81 4.47L17.58 4.41C15.66 3.42 14 3 12 3C10.03 3 8.15 3.47 6.44 4.41L6.29 4.46L5.71 3.89C5.73 3.74 5.82 3.61 5.96 3.53C7.82 2.5 9.86 2 12 2C14.14 2 16 2.47 18.04 3.5C18.29 3.65 18.38 3.95 18.25 4.19C18.16 4.37 18 4.47 17.81 4.47ZM17.15 5.65C18.65 6.42 19.91 7.5 20.9 8.9C21.06 9.12 21 9.44 20.78 9.6C20.55 9.76 20.24 9.71 20.08 9.5C19.18 8.22 18.04 7.23 16.69 6.54C14.06 5.19 10.76 5.08 8.03 6.21L7.27 5.45C10.34 4.04 14.14 4.1 17.15 5.65ZM12 9.27C15.12 9.27 17.66 11.69 17.66 14.66C17.66 14.7926 17.6073 14.9198 17.5136 15.0136C17.4198 15.1073 17.2926 15.16 17.16 15.16L16.93 15.11L16.72 14.89L16.66 14.66C16.66 12.27 14.62 10.32 12.09 10.27L11.15 9.33L12 9.27ZM14.38 18.22C14.71 18.45 15.07 18.62 15.47 18.73L12.63 15.9C12.92 16.82 13.53 17.65 14.38 18.22ZM19.21 14.66C19.21 10.89 15.96 7.83 11.96 7.83C11.26 7.83 10.58 7.93 9.93 8.11L9.12 7.3C10 7 10.97 6.82 11.96 6.82C16.5 6.82 20.21 10.33 20.21 14.65C20.21 15.65 19.69 16.53 18.89 17.06L18.17 16.34C18.79 16 19.21 15.38 19.21 14.66Z" />
    </Svg>
  );
};
