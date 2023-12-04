import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraIrisIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.73 15L9.83 21.76C10.53 21.91 11.25 22 12 22C14.4 22 16.6 21.15 18.32 19.75L14.66 13.4L13.73 15ZM2.46 15C3.38 17.92 5.61 20.26 8.45 21.34L12.12 15H2.46ZM8.54 12L4.64 5.25C3 7 2 9.39 2 12C2 12.68 2.07 13.35 2.2 14H9.69L8.54 12ZM21.8 10H14.31L14.6 10.5L19.36 18.75C21 16.97 22 14.6 22 12C22 11.31 21.93 10.64 21.8 10ZM21.54 9C20.62 6.07 18.39 3.74 15.55 2.66L11.88 9H21.54ZM9.4 10.5L14.17 2.24C13.47 2.09 12.75 2 12 2C9.6 2 7.4 2.84 5.68 4.25L9.34 10.6L9.4 10.5Z" />
    </Svg>
  );
};
