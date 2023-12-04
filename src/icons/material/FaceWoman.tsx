import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FaceWomanIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.75 13C13.75 12.31 14.31 11.75 15 11.75C15.69 11.75 16.25 12.31 16.25 13C16.25 13.69 15.69 14.25 15 14.25C14.31 14.25 13.75 13.69 13.75 13ZM22 12V22H2V12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 11.21 19.88 10.45 19.67 9.74C18.95 9.91 18.2 10 17.42 10C14.05 10 11.07 8.33 9.26 5.77C8.28 8.16 6.41 10.09 4.05 11.14C4 11.42 4 11.71 4 12ZM9 14.25C9.69 14.25 10.25 13.69 10.25 13C10.25 12.31 9.69 11.75 9 11.75C8.31 11.75 7.75 12.31 7.75 13C7.75 13.69 8.31 14.25 9 14.25Z" />
    </Svg>
  );
};
