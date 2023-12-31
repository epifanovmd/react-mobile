import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SatelliteUplinkIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.86 2L11.34 3.93C15.75 4.78 19.2 8.23 20.05 12.65L22 12.13C20.95 7.03 16.96 3.04 11.86 2ZM10.82 5.86L10.3 7.81C13.34 8.27 15.72 10.65 16.18 13.68L18.12 13.16C17.46 9.44 14.55 6.5 10.82 5.86ZM3.72 9.69C3.25 10.73 3 11.86 3 13C3 14.95 3.71 16.82 5 18.28V22H8V20.41C8.95 20.8 9.97 21 11 21C12.14 21 13.27 20.75 14.3 20.28L3.72 9.69ZM9.79 9.76L9.26 11.72C10.0556 11.72 10.8187 12.0361 11.3813 12.5987C11.9439 13.1613 12.26 13.9244 12.26 14.72L14.23 14.2C14 11.86 12.13 10 9.79 9.76Z" />
    </Svg>
  );
};
