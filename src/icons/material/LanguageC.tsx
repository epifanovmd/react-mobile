import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageCIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.45 15.97L15.87 18.41C15.61 18.55 15.19 18.68 14.63 18.8C14.06 18.93 13.39 19 12.62 19C10.41 18.96 8.74996 18.3 7.63996 17.04C6.49996 15.77 5.95996 14.16 5.95996 12.21C5.99996 9.9 6.67996 8.13 7.99996 6.89C9.27996 5.64 10.92 5 12.9 5C13.65 5 14.3 5.07 14.84 5.19C15.38 5.31 15.78 5.44 16.04 5.59L15.44 8.08L14.4 7.74C14 7.64 13.53 7.59 13 7.59C11.85 7.58 10.89 7.95 10.14 8.69C9.37996 9.42 8.99996 10.54 8.95996 12.03C8.96996 13.39 9.32996 14.45 10.04 15.23C10.75 16 11.74 16.4 13.03 16.41L14.36 16.29C14.79 16.21 15.15 16.1 15.45 15.97Z" />
    </Svg>
  );
};
