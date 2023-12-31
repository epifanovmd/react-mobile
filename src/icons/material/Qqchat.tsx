import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const QqchatIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.1801 13.54C3.7601 12.16 4.5701 11.14 5.1701 10.92C5.1601 10.12 5.3101 9.62 5.5601 9.22C5.5601 9.19 5.5001 8.86 5.7201 8.45C5.8701 4.85 8.2101 2 12.0001 2C15.7901 2 18.1301 4.85 18.2801 8.45C18.5001 8.86 18.4401 9.19 18.4401 9.22C18.6901 9.62 18.8401 10.12 18.8301 10.92C19.4301 11.14 20.2401 12.16 20.8201 13.55C21.5701 15.31 21.6901 17 21.0901 17.3C20.6801 17.5 20.0301 17 19.4201 16.12C19.1801 17.1 18.5801 18 17.7301 18.71C18.6301 19.04 19.2101 19.58 19.2101 20.19C19.2101 21.19 17.6301 22 15.6901 22C13.9301 22 12.5001 21.34 12.2101 20.5H11.7901C11.5001 21.34 10.0701 22 8.3101 22C6.3701 22 4.7901 21.19 4.7901 20.19C4.7901 19.58 5.3701 19.04 6.2701 18.71C5.4201 18 4.8201 17.1 4.5801 16.12C3.9701 17 3.3201 17.5 2.9101 17.3C2.3101 17 2.4301 15.31 3.1801 13.54Z" />
    </Svg>
  );
};
