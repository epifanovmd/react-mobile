import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.5 9.63C15.31 6.84 14.18 4.12 12.06 2C9.92 4.14 8.74 6.86 8.5 9.63C9.79 10.31 10.97 11.19 12 12.26C13.03 11.2 14.21 10.32 15.5 9.63ZM12 15.45C9.85 12.17 6.18 10 2 10C2 20 11.32 21.89 12 22C12.68 21.88 22 20 22 10C17.82 10 14.15 12.17 12 15.45Z" />
    </Svg>
  );
};
