import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SnowboardIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.87 20.37C21.76 20.2 21.62 20.09 21.43 20.06C21.18 20 20.96 20.05 20.78 20.2C20.43 20.5 20.04 20.73 19.58 20.86C19.13 21 18.66 21 18.16 20.9L17.04 20.62L16 14.46L12.74 11.79L14.5 8.94C15.08 9.85 15.85 10.58 16.83 11.14C17.81 11.7 18.88 12 20.03 12V9.97C19.09 9.97 18.26 9.72 17.53 9.22C16.8 8.72 16.26 8.07 15.92 7.26L15.36 6.05C15.26 5.86 15.08 5.64 14.82 5.39C14.55 5.14 14.19 5 13.72 5H8.06999L5.53999 9L7.26999 10.06L9.13999 7H11.5L8.99999 10.95C8.68999 11.42 8.59999 11.93 8.71999 12.5L9.55999 15.95L6.05999 18.29L5.58999 18.19C5.12999 18.1 4.69999 17.91 4.32999 17.61C3.95999 17.31 3.67999 16.96 3.49999 16.56C3.39999 16.31 3.22999 16.17 2.99999 16.14C2.75999 16.08 2.55999 16.11 2.38999 16.23C2.21999 16.35 2.11999 16.5 2.08999 16.7C2.05999 16.85 2.06999 17 2.12999 17.17C2.41999 17.79 2.82999 18.33 3.36999 18.78C3.91999 19.23 4.54999 19.5 5.26999 19.64L17.88 22.35C18.6 22.5 19.29 22.5 19.96 22.3C20.63 22.12 21.23 21.79 21.76 21.32C21.88 21.23 21.96 21.11 22 20.95C22 20.73 22 20.54 21.87 20.37ZM8.76999 18.89L11.81 16.89L11.34 13.57L14.19 15.58L14.94 20.2L8.76999 18.89ZM18 3C18 4.11 17.11 5 16 5C14.89 5 14 4.11 14 3C14 1.89 14.9 1 16 1C17.1 1 18 1.9 18 3Z" />
    </Svg>
  );
};
