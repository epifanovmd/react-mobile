import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DrawPenIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.74996 20.85C11.53 20.15 11.14 18.22 10.24 17C9.34996 15.75 8.11996 14.89 6.87996 14.06C5.99996 13.5 5.18996 12.8 4.53996 12C4.25996 11.67 3.68996 11.06 4.26996 10.94C4.85996 10.82 5.87996 11.4 6.39996 11.62C7.30996 12 8.20996 12.44 9.04996 12.96L10.06 11.26C8.49996 10.23 6.49996 9.32 4.63996 9.05C3.57996 8.89 2.45996 9.11 2.09996 10.26C1.77996 11.25 2.28996 12.25 2.86996 13.03C4.23995 14.86 6.36996 15.74 7.95996 17.32C8.29996 17.65 8.70996 18.04 8.90996 18.5C9.11996 18.94 9.06996 18.97 8.59996 18.97C7.35996 18.97 5.80996 18 4.79996 17.36L3.78996 19.06C5.31996 20 7.87996 21.47 9.74996 20.85ZM18.96 7.33L13.29 13H11V10.71L16.67 5.03L18.96 7.33ZM22.36 6.55C22.35 6.85 22.04 7.16 21.72 7.47L19.2 10L18.33 9.13L20.93 6.54L20.34 5.95L19.67 6.62L17.38 4.33L19.53 2.18C19.77 1.94 20.16 1.94 20.39 2.18L21.82 3.61C22.06 3.83 22.06 4.23 21.82 4.47C21.61 4.68 21.41 4.88 21.41 5.08C21.39 5.28 21.59 5.5 21.79 5.67C22.08 5.97 22.37 6.25 22.36 6.55Z" />
    </Svg>
  );
};
