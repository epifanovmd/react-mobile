import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ImageFilterTiltShiftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.68005 19.7408C7.16005 20.9508 9.00005 21.7508 11 21.9508V19.9308C9.54005 19.7508 8.21005 19.1708 7.10005 18.3108L5.68005 19.7408ZM13 19.9308V21.9508C15 21.7508 16.84 20.9508 18.32 19.7408L16.89 18.3108C15.79 19.1708 14.46 19.7508 13 19.9308ZM18.31 16.9008L19.74 18.3308C20.9501 16.8508 21.75 15.0008 21.9501 13.0008H19.93C19.75 14.4608 19.17 15.7908 18.31 16.9008ZM15 12.0008C15 11.2051 14.684 10.4421 14.1214 9.87946C13.5588 9.31685 12.7957 9.00078 12 9.00078C11.2044 9.00078 10.4413 9.31685 9.87873 9.87946C9.31612 10.4421 9.00005 11.2051 9.00005 12.0008C9.00005 12.7964 9.31612 13.5595 9.87873 14.1221C10.4413 14.6847 11.2044 15.0008 12 15.0008C12.7957 15.0008 13.5588 14.6847 14.1214 14.1221C14.684 13.5595 15 12.7964 15 12.0008ZM4.07005 13.0008H2.05005C2.25005 15.0008 3.05005 16.8408 4.26005 18.3208L5.69005 16.8908C4.83005 15.7908 4.25005 14.4608 4.07005 13.0008ZM5.69005 7.10078L4.26005 5.68078C3.05005 7.16078 2.25005 9.00078 2.05005 11.0008H4.07005C4.25005 9.54078 4.83005 8.21078 5.69005 7.10078ZM19.93 11.0008H21.9501C21.75 9.00078 20.9501 7.16078 19.74 5.68078L18.31 7.10078C19.17 8.21078 19.75 9.54078 19.93 11.0008ZM18.32 4.26078C16.84 3.05078 15 2.25078 13 2.05078V4.07078C14.46 4.25078 15.79 4.83078 16.9 5.69078L18.32 4.26078ZM11 4.07078V2.05078C9.00005 2.25078 7.16005 3.05078 5.68005 4.26078L7.10005 5.69078C8.21005 4.83078 9.54005 4.25078 11 4.07078Z" />
    </Svg>
  );
};
