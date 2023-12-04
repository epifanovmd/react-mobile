import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DominoMaskIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.83 9.81C14.7 9.7 13.69 10.38 13.46 11.5C13.46 11.84 14.81 12.29 16.05 12.29C17.29 12.29 18.41 11.5 18.41 11.28C18.41 11.05 17.63 9.93 15.83 9.81ZM8.18 9.81C6.38 9.93 5.59 10.94 5.59 11.27C5.59 11.5 6.82 12.29 7.95 12.29C9.08 12.29 10.54 11.84 10.54 11.5C10.31 10.38 9.19 9.7 8.18 9.81ZM16.95 16C15.04 16 13.8 13.75 12 13.75C10.2 13.75 8.85 16 7.05 16C4.69 16 3 13.86 3 10.04C3 7.68 3.68 7 6.71 7C9.74 7 10.54 8.24 12 8.24C13.46 8.24 14.36 7 17.29 7C20.22 7 21 7.79 21 10.04C21 13.86 19.31 16 16.95 16Z" />
    </Svg>
  );
};
