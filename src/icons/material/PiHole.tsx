import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PiHoleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.62012 2C9.50012 2 11.5701 4.29 11.7701 7.93C12.5001 3.57 15.9301 4.08 15.9301 4.08C16.1001 6.55 14.0701 8.05 11.7701 8.17C11.1201 6.81 7.25012 3.47 7.25012 3.47C7.23012 3.5 10.9701 6.74 10.8301 8.15C8.33012 7.88 5.82012 6 5.62012 2ZM6.06012 13.11L9.92012 9.25C11.0901 8.08 13.0001 8.08 14.1601 9.25L18.0001 13.11C19.1901 14.28 19.1901 16.18 18.0001 17.35L14.1601 21.21C13.0001 22.38 11.0901 22.38 9.92012 21.21L6.06012 17.35C4.89012 16.18 4.89012 14.28 6.06012 13.11ZM9.39012 19.59C9.39012 18.36 10.1501 16.85 12.0901 16.85C13.4001 16.85 14.8701 18.1 16.3101 17.96C14.8701 17.92 13.5901 16.85 13.5901 15.19C13.5901 13.86 14.6901 12.9 14.6901 11.34C14.6301 12.33 13.8201 13.77 12.0001 13.77C10.5901 13.77 9.55012 12.63 7.87012 12.63C8.58012 12.67 10.5001 13.3 10.5001 15.35C10.5001 17 9.39012 17.5 9.39012 19.59Z" />
    </Svg>
  );
};
