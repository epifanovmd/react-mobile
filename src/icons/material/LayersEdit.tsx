import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LayersEditIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.63 10.27L3 9L12 2L19.94 8.17L12.5 15.61L12 16L4.63 10.27ZM10 18.94V18.11L10.59 17.53L10.63 17.5L4.62 12.81L3 14.07L10 19.5V18.94ZM21.7 12.58L20.42 11.3C20.21 11.09 19.86 11.09 19.65 11.3L18.65 12.3L20.7 14.35L21.7 13.35C21.91 13.14 21.91 12.79 21.7 12.58ZM12 21H14.06L20.11 14.93L18.06 12.88L12 18.94V21Z" />
    </Svg>
  );
};
