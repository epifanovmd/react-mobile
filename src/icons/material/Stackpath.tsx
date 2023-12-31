import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StackpathIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.90996 8C4.03996 8 3.31996 8.2 2.75996 8.61C2.18996 9 1.90996 9.53 1.90996 10.19C1.90996 10.85 2.14996 11.37 2.61996 11.72C3.09996 12.07 3.81996 12.41 4.79996 12.72C5.26996 12.88 5.59996 13.04 5.77996 13.19C5.95996 13.34 6.04996 13.55 6.04996 13.83C6.04996 14.07 5.95996 14.26 5.77996 14.41C5.59996 14.56 5.31996 14.63 4.93996 14.63C4.44996 14.63 4.08996 14.54 3.84996 14.35C3.59996 14.16 3.49996 13.84 3.49996 13.39H1.71996L1.70996 13.42C1.69996 14.25 1.99996 14.89 2.65996 15.33C3.29996 15.78 4.05996 16 4.93996 16C5.81996 16 6.49996 15.8 7.05996 15.42C7.58996 15.03 7.85996 14.5 7.85996 13.81C7.85996 13.14 7.62996 12.61 7.18996 12.23C6.73996 11.84 6.07996 11.5 5.19996 11.26C4.61996 11.05 4.22996 10.88 3.99996 10.74C3.80996 10.6 3.70996 10.42 3.70996 10.2C3.70996 9.96 3.80996 9.76 3.99996 9.6C4.21996 9.44 4.49996 9.36 4.86996 9.36C5.23996 9.36 5.52996 9.46 5.73996 9.65C5.95996 9.84 6.06996 10.12 6.05996 10.41H7.79996L7.81996 10.37C7.83996 9.68 7.56996 9.11 6.99996 8.66C6.46996 8.22 5.76996 8 4.90996 8ZM8.99996 8.05V15.93H10.84V13.23H11.96C12.89 13.23 13.63 13 14.18 12.5C14.73 12.05 15 11.42 15 10.64C15 9.87 14.73 9.25 14.18 8.77C13.63 8.29 12.89 8.05 11.96 8.05H8.99996ZM17.24 8.05L14.5 15.93H16.22L19 8.05H17.24ZM20.5 8.05L17.79 15.93H19.5L22.29 8.05H20.5ZM10.84 9.46H11.96C12.35 9.46 12.66 9.57 12.86 9.8C13.07 10 13.17 10.31 13.17 10.65C13.17 11 13.07 11.28 12.86 11.5C12.66 11.71 12.35 11.82 11.96 11.82H10.84" />
    </Svg>
  );
};
