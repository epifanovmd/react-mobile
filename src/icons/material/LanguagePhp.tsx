import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguagePhpIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 18.0799C5.37 18.0799 0 15.3599 0 11.9999C0 8.63992 5.37 5.91992 12 5.91992C18.63 5.91992 24 8.63992 24 11.9999C24 15.3599 18.63 18.0799 12 18.0799ZM6.81 10.1299C7.35 10.1299 7.72 10.2299 7.9 10.4399C8.08 10.6399 8.12 10.9999 8.03 11.4699C7.93 11.9999 7.74 12.3399 7.45 12.5599C7.17 12.7799 6.74 12.8899 6.16 12.8899H5.29L5.82 10.1299H6.81ZM3.31 15.6799H4.75L5.09 13.9299H6.32C6.86 13.9299 7.3 13.8699 7.65 13.7599C8 13.6399 8.32 13.4499 8.61 13.1799C8.85 12.9599 9.04 12.7199 9.19 12.4499C9.34 12.1899 9.45 11.8899 9.5 11.5699C9.66 10.7899 9.55 10.1799 9.17 9.74992C8.78 9.30992 8.18 9.09992 7.35 9.09992H4.59L3.31 15.6799ZM10.56 7.34992L9.28 13.9299H10.7L11.44 10.1599H12.58C12.94 10.1599 13.18 10.2199 13.29 10.3399C13.4 10.4599 13.42 10.6799 13.36 10.9999L12.79 13.9299H14.24L14.83 10.8599C14.96 10.2399 14.86 9.78992 14.56 9.49992C14.26 9.22992 13.71 9.09992 12.91 9.09992H11.64L12 7.34992H10.56ZM18 10.1299C18.55 10.1299 18.91 10.2299 19.09 10.4399C19.27 10.6399 19.31 10.9999 19.22 11.4699C19.12 11.9999 18.93 12.3399 18.65 12.5599C18.36 12.7799 17.93 12.8899 17.35 12.8899H16.5L17 10.1299H18ZM14.5 15.6799H15.94L16.28 13.9299H17.5C18.05 13.9299 18.5 13.8699 18.85 13.7599C19.2 13.6399 19.5 13.4499 19.8 13.1799C20.04 12.9599 20.24 12.7199 20.38 12.4499C20.53 12.1899 20.64 11.8899 20.7 11.5699C20.85 10.7899 20.74 10.1799 20.36 9.74992C20 9.30992 19.37 9.09992 18.54 9.09992H15.79L14.5 15.6799Z" />
    </Svg>
  );
};
