import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlphaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.0799 17.8C17.6199 17.93 17.2099 18 16.8499 18C15.6499 18 14.8399 17.12 14.4299 15.35H14.3799C13.3899 17.26 11.9999 18.21 10.2499 18.21C8.93992 18.21 7.88992 17.72 7.09992 16.73C6.30992 15.74 5.91992 14.5 5.91992 13C5.91992 11.25 6.36992 9.85 7.25992 8.76C8.14992 7.67 9.35992 7.12 10.8899 7.12C11.7099 7.12 12.4499 7.35 13.0899 7.8C13.7299 8.26 14.2199 8.89999 14.5599 9.72999H14.5999L15.3099 7.33H17.8699L15.7299 12.65C15.9699 13.89 16.2199 14.74 16.4999 15.19C16.7399 15.64 17.0799 15.87 17.4999 15.87C17.7399 15.87 17.9299 15.83 18.0999 15.76L18.0799 17.8ZM13.8199 12.56C13.6099 11.43 13.2699 10.55 12.8099 9.95C12.3599 9.33999 11.8099 9.04 11.1799 9.04C10.3599 9.04 9.69992 9.41 9.20992 10.14C8.71992 10.88 8.49992 11.79 8.49992 12.86C8.49992 13.84 8.68992 14.65 9.11992 15.31C9.53992 15.97 10.1099 16.29 10.8199 16.29C11.4199 16.29 11.9699 16 12.4599 15.45C12.9599 14.88 13.3699 14.05 13.6999 12.96L13.8199 12.56Z" />
    </Svg>
  );
};
