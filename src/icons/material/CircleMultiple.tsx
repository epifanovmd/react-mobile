import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CircleMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 4C16.5822 4 18.1289 4.46919 19.4445 5.34824C20.7601 6.22729 21.7855 7.47672 22.391 8.93853C22.9965 10.4003 23.1549 12.0089 22.8463 13.5607C22.5376 15.1126 21.7757 16.538 20.6568 17.6569C19.538 18.7757 18.1126 19.5376 16.5607 19.8463C15.0089 20.155 13.4003 19.9965 11.9385 19.391C10.4767 18.7855 9.22727 17.7602 8.34822 16.4446C7.46917 15.129 6.99998 13.5823 6.99998 12C6.99998 9.87827 7.84284 7.84344 9.34313 6.34315C10.8434 4.84285 12.8782 4 15 4ZM2.99998 12C3.0014 13.2396 3.38672 14.4483 4.10298 15.46C4.81924 16.4718 5.83128 17.2368 6.99998 17.65V19.74C5.28799 19.2925 3.77265 18.2901 2.69113 16.8896C1.60962 15.4891 1.02295 13.7695 1.02295 12C1.02295 10.2305 1.60962 8.51093 2.69113 7.11041C3.77265 5.70989 5.28799 4.70746 6.99998 4.26V6.35C5.83128 6.7632 4.81924 7.52824 4.10298 8.53995C3.38672 9.55167 3.0014 10.7604 2.99998 12Z" />
    </Svg>
  );
};
