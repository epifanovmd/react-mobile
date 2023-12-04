import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageXamlIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.9301 7.9L19.3101 12L16.9501 16.09L16.3301 15L17.8001 12.5C17.9701 12.19 17.9701 11.83 17.8001 11.54L16.3201 9L16.9301 7.9ZM16.9201 6.57C16.8901 6.57 16.8501 6.59 16.8301 6.62L15.5601 8.87C15.5001 8.94 15.5001 9 15.5601 9.09L17.1801 11.9C17.2201 11.97 17.2201 12.05 17.1801 12.12L15.5701 14.91C15.5301 14.97 15.5301 15.06 15.5701 15.13L16.8501 17.36C16.8701 17.4 16.9101 17.42 16.9401 17.42C17.0001 17.42 17.0001 17.4 17.0401 17.36L20.0001 12.23C20.0801 12.09 20.0801 11.92 20.0001 11.79L17.0001 6.62C17.0001 6.59 16.9601 6.57 16.9201 6.57ZM21.9101 11.67L17.2301 3.58C17.1101 3.38 16.8901 3.25 16.6601 3.25H7.28012C7.05012 3.25 6.83012 3.38 6.71012 3.58L2.00012 11.67C1.91012 11.87 1.91012 12.13 2.00012 12.33L6.71012 20.42C6.83012 20.62 7.05012 20.75 7.28012 20.75H16.6601C16.8901 20.75 17.1101 20.62 17.2301 20.42L21.9101 12.33C22.0301 12.13 22.0301 11.88 21.9101 11.67ZM7.30012 3.95H16.1201L11.7601 11.65H6.93012L10.8701 4.82C10.9101 4.75 10.8601 4.66 10.7801 4.66L8.21012 4.65C8.13012 4.65 8.06012 4.7 8.00012 4.76L4.04012 11.65H2.84012L7.30012 3.95ZM6.17012 12.46L9.74012 18.63H8.50012L4.87012 12.35L4.67012 12L4.87012 11.65L8.50012 5.37H9.73012L6.17012 11.53C6.15012 11.57 6.13012 11.61 6.11012 11.65C6.03012 11.88 6.03012 12.13 6.12012 12.35C6.13012 12.39 6.15012 12.43 6.17012 12.46ZM7.30012 20.05L2.85012 12.35H4.05012L8.03012 19.23C8.07012 19.3 8.14012 19.34 8.22012 19.34H10.7901C10.8701 19.34 10.9201 19.25 10.8801 19.18L6.94012 12.35H11.7701L16.1701 20.05H7.30012ZM16.8001 19.75L12.3701 12L16.7801 4.21L21.2901 12L16.8001 19.75Z" />
    </Svg>
  );
};
