import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GentooIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.28 2C9.92999 2 9.56999 2.03 9.22999 2.1C5.60999 2.76 3.05999 5.89 2.84999 7.96C2.73999 8.97 3.28999 9.73 3.58999 10.06C4.39999 10.97 6.02999 11.66 7.06999 12.23C5.55999 13.5 4.86999 14.14 4.18999 14.86C3.16999 15.93 2.44999 17.1 2.44999 17.95C2.44999 18.22 2.39999 19.09 2.75999 19.77C2.88999 20.03 3.26999 20.89 4.40999 21.53C5.13999 21.94 6.16999 22.09 7.18999 21.95C10.33 21.5 14.54 18.83 17.55 16.35C19.46 14.77 20.86 13.23 21.26 12.5C21.59 11.87 21.63 10.78 21.44 10.09C20.9 8.14 16.53 4.15 12.96 2.55C12.14 2.18 11.2 2 10.28 2ZM11.34 4.91C11.59 4.91 11.81 4.94 12 5C13.15 5.3 15.08 6.68 14.91 7.94C14.68 9.6 13.23 10.27 11.56 10.03C10.58 9.9 8.62999 8.8 8.77999 6.89C8.88999 5.4 10.3 4.9 11.34 4.91ZM11.32 6.65C11.05 6.65 10.84 6.71 10.74 6.87C10.27 7.59 10.5 8.09 10.92 8.42C11.07 8.04 12.71 8.45 12.75 8.79C14.17 7.72 12.36 6.66 11.32 6.65Z" />
    </Svg>
  );
};
