import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MeteorIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.80005 3L19.67 18.82C19.67 18.82 20 19.27 19.58 19.71C19.17 20.15 18.63 19.77 18.63 19.77L2.80005 3ZM7.81005 4.59L20.91 16.64C20.91 16.64 21.23 17.08 20.82 17.5C20.4 17.97 19.8601 17.59 19.8601 17.59L7.81005 4.59ZM4.29005 8L17.39 20.03C17.39 20.03 17.71 20.47 17.3 20.91C16.88 21.36 16.34 21 16.34 21L4.29005 8ZM12.05 5.96L21.2001 14.37C21.2001 14.37 21.42 14.68 21.13 15C20.85 15.3 20.47 15.03 20.47 15.03L12.05 5.96ZM5.45005 11.91L14.6 20.33C14.6 20.33 14.82 20.64 14.54 20.95C14.25 21.26 13.87 21 13.87 21L5.45005 11.91ZM16.38 7.92L20.55 11.74C20.55 11.74 20.66 11.88 20.5 12.03C20.38 12.17 20.1901 12.05 20.1901 12.05L16.38 7.92ZM7.56005 16.1L11.74 19.91C11.74 19.91 11.85 20.06 11.7 20.2C11.56 20.35 11.37 20.22 11.37 20.22L7.56005 16.1Z" />
    </Svg>
  );
};
