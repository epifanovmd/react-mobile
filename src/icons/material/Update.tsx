import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UpdateIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 10.12H14.22L16.96 7.3C14.23 4.6 9.81 4.5 7.08 7.2C4.35 9.91 4.35 14.28 7.08 17C9.81 19.7 14.23 19.7 16.96 17C18.32 15.65 19 14.08 19 12.1H21C21 14.08 20.12 16.65 18.36 18.39C14.85 21.87 9.15 21.87 5.64 18.39C2.14 14.92 2.11 9.28 5.62 5.81C9.13 2.34 14.76 2.34 18.27 5.81L21 3V10.12ZM12.5 8V12.25L16 14.33L15.28 15.54L11 13V8H12.5Z" />
    </Svg>
  );
};
