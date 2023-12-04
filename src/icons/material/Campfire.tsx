import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CampfireIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.9001 18.5L21.9001 20.1L21.5001 22L12.1001 19.5L2.7001 22L2.2001 20.1L8.2001 18.5L2.1001 16.9L2.6001 15L12.0001 17.5L21.4001 15L21.9001 16.9L15.9001 18.5ZM16.0701 7.92C15.9101 7.7 15.7101 7.5 15.5001 7.33C15.0501 6.9 14.5001 6.59 14.0601 6.13C13.0001 5.08 12.7901 3.34 13.4401 2C12.7901 2.17 12.1801 2.54 11.6701 2.95C9.8401 4.46 9.1101 7.1 10.0001 9.38C10.0001 9.45 10.0401 9.53 10.0401 9.62C10.0401 9.78 9.9301 9.92 9.7901 10C9.6301 10.05 9.4601 10 9.3301 9.9C9.2801 9.86 9.2501 9.82 9.2201 9.77C8.4201 8.74 8.2901 7.26 8.8401 6.07C7.6501 7.06 7.0001 8.72 7.1101 10.29C7.1301 10.65 7.1801 11 7.3001 11.36C7.4101 11.8 7.5901 12.23 7.8201 12.61C8.5701 13.86 9.9001 14.76 11.3201 14.94C12.8401 15.14 14.4601 14.85 15.6301 13.79C16.9301 12.59 17.4001 10.67 16.7101 9L16.6101 8.83C16.4701 8.5 16.2801 8.2 16.0401 7.93L16.0701 7.92ZM13.8301 12.47C13.6301 12.65 13.3101 12.83 13.0501 12.91C12.2601 13.19 11.4601 12.79 11.0001 12.31C11.8401 12.11 12.3401 11.47 12.5001 10.83C12.6101 10.25 12.3901 9.78 12.2901 9.22C12.2101 8.69 12.2201 8.23 12.4201 7.73C12.5501 8 12.6901 8.28 12.8601 8.5C13.4101 9.22 14.2701 9.54 14.4501 10.5C14.4701 10.63 14.5001 10.72 14.5001 10.83C14.5001 11.43 14.2601 12.07 13.8201 12.47" />
    </Svg>
  );
};
