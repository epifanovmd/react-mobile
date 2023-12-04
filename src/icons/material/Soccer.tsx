import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SoccerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12ZM9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75ZM12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03ZM5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21ZM11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66C8.05 5 8.87 4.57 9.65 4.35L11 5.29ZM14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35ZM4.93 4.93C3 6.89 2 9.25 2 12C2 14.75 3 17.11 4.93 19.07C6.86 21.03 9.25 22 12 22C14.75 22 17.11 21 19.07 19.07C21.03 17.14 22 14.75 22 12C22 9.25 21 6.89 19.07 4.93C17.14 2.97 14.75 2 12 2C9.25 2 6.89 3 4.93 4.93Z" />
    </Svg>
  );
};
