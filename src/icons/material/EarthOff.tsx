import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarthOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 5.27L20.5 6.75C21.46 8.28 22 10.07 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.08 22 8.28 21.46 6.75 20.5L5.27 22L4 20.72L20.72 4L22 5.27ZM17.9 17.39C19.2 15.97 20 14.08 20 12C20 10.63 19.66 9.34 19.05 8.22L14.83 12.44C14.94 12.6 15 12.79 15 13V16H16C16.89 16 17.64 16.59 17.9 17.39ZM11 19.93V18C10.5 18 10.07 17.83 9.73 17.54L8.22 19.05C9.07 19.5 10 19.8 11 19.93ZM15 4.59V5C15 5.53043 14.7893 6.03914 14.4142 6.41421C14.0391 6.78929 13.5304 7 13 7H11V9C11 9.26522 10.8946 9.51957 10.7071 9.70711C10.5196 9.89464 10.2652 10 10 10H8V12H10.18L8.09 14.09L4.21 10.21C4.08 10.78 4 11.38 4 12C4 13.74 4.56 15.36 5.5 16.67L4.08 18.1C2.77 16.41 2 14.3 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.3 2 16.41 2.77 18.1 4.08L16.67 5.5C16.16 5.14 15.6 4.83 15 4.59Z" />
    </Svg>
  );
};
