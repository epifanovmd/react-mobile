import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LayersSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.31 18.9C19.75 18.21 20 17.38 20 16.5C20 14 18 12 15.5 12C13 12 11 14 11 16.5C11 19 13 21 15.5 21C16.37 21 17.19 20.75 17.88 20.32L21 23.39L22.39 22L19.31 18.9ZM15.5 19C14.12 19 13 17.88 13 16.5C13 15.12 14.12 14 15.5 14C16.88 14 18 15.12 18 16.5C18 17.88 16.88 19 15.5 19ZM9.59 19.2L3 14.07L4.62 12.81L9 16.22C9 16.32 9 16.41 9 16.5C9 17.46 9.22 18.38 9.59 19.2ZM9.5 14.04L3 9L12 2L21 9L18.66 10.82C17.96 10.44 17.19 10.18 16.37 10.07L17.74 9L12 4.53L6.26 9L10.53 12.32C10.1 12.84 9.74 13.42 9.5 14.04Z" />
    </Svg>
  );
};
