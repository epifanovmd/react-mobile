import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PlaylistEditIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 6V8H14V6H2ZM2 10V12H14V10H2ZM20.04 10.13C19.9 10.13 19.76 10.19 19.65 10.3L18.65 11.3L20.7 13.35L21.7 12.35C21.92 12.14 21.92 11.79 21.7 11.58L20.42 10.3C20.31 10.19 20.18 10.13 20.04 10.13ZM18.07 11.88L12 17.94V20H14.06L20.12 13.93L18.07 11.88ZM2 14V16H10V14H2Z" />
    </Svg>
  );
};
