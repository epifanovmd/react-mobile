import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CopyleftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.92 10.86C14.04 11.85 14.12 13.1 13.62 14C13.5 14.27 13.28 14.5 13.03 14.64C12.8 14.79 12.5 14.86 12.14 14.87C11.72 14.87 11.33 14.73 11 14.47C10.87 14.34 10.75 14.19 10.66 14C10.57 13.83 10.5 13.64 10.5 13.43H8.72C8.73 13.84 8.84 14.22 9 14.58C9.2 14.94 9.45 15.25 9.76 15.5C11.2 16.83 13.85 16.62 15.06 15.13C16.37 13.46 16.34 10.54 15.05 8.87C13.83 7.35 11.13 7.16 9.68 8.5C9.38 8.78 9.15 9.12 9 9.5C8.81 9.9 8.72 10.33 8.7 10.8H10.5C10.5 10.37 10.69 9.94 10.97 9.63C11.26 9.34 11.67 9.14 12.12 9.14C12.81 9.15 13.33 9.44 13.62 10C13.76 10.24 13.87 10.53 13.92 10.86ZM12 2C6.5 2 2 6.5 2 12C2.53 25.26 21.47 25.27 22 12C22 6.5 17.5 2 12 2ZM4 12C4.44 1.39 19.56 1.39 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12Z" />
    </Svg>
  );
};
