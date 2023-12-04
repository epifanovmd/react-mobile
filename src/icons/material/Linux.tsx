import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LinuxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.62 8.35C14.2 8.63 12.87 9.39 12.67 9.54C12.28 9.85 11.92 9.83 11.53 9.53C11.33 9.37 9.99996 8.61 9.57996 8.34C9.09996 8.03 9.12996 7.64 9.65996 7.42C11.3 6.73 12.94 6.78 14.57 7.45C15.06 7.66 15.08 8.05 14.62 8.35ZM21.84 15.63C20.91 13.54 19.64 11.64 18 9.97C17.47 9.42 17.14 8.8 16.94 8.09C16.84 7.76 16.77 7.42 16.7 7.08C16.5 6.2 16.41 5.3 16 4.47C15.27 2.89 14 2.07 12.16 2C10.35 2.05 8.99996 2.81 8.20996 4.4C7.99996 4.83 7.84996 5.28 7.74996 5.74C7.57996 6.5 7.42996 7.29 7.24996 8.06C7.09996 8.71 6.79996 9.27 6.28996 9.77C4.67996 11.34 3.38996 13.14 2.40996 15.12C2.26996 15.41 2.12996 15.7 2.03996 16C1.84996 16.66 2.32996 17.12 3.02996 16.96C3.46996 16.87 3.90996 16.78 4.32996 16.65C4.73996 16.5 4.89996 16.6 4.99996 17C5.64996 19.15 7.06996 20.66 9.23996 21.5C13.36 23.06 18.17 20.84 19.21 16.92C19.28 16.65 19.38 16.55 19.68 16.65C20.14 16.79 20.61 16.89 21.08 17C21.57 17.09 21.93 16.84 22 16.36C22.03 16.1 21.94 15.87 21.84 15.63Z" />
    </Svg>
  );
};
