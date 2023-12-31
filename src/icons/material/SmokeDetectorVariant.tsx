import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmokeDetectorVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 11C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11ZM10.72 9.3C11.11 9.11 11.54 9 12 9C12.46 9 12.89 9.11 13.29 9.3L14 8.57C13.43 8.22 12.74 8 12 8C11.26 8 10.58 8.22 10 8.57L10.72 9.3ZM15 12C15 12.46 14.89 12.89 14.7 13.29L15.43 14C15.79 13.43 16 12.74 16 12C16 11.26 15.79 10.58 15.43 10L14.7 10.72C14.89 11.11 15 11.54 15 12ZM9 12C9 11.54 9.11 11.11 9.3 10.72L8.57 10C8.22 10.58 8 11.26 8 12C8 12.74 8.22 13.43 8.57 14L9.3 13.29C9.11 12.89 9 12.46 9 12ZM13.29 14.7C12.89 14.89 12.46 15 12 15C11.54 15 11.11 14.89 10.72 14.7L10 15.43C10.58 15.79 11.26 16 12 16C12.74 16 13.43 15.79 14 15.43L13.29 14.7ZM16.89 8.53L16.17 9.25C16.69 10.04 17 11 17 12C17 13 16.69 13.96 16.17 14.75L16.89 15.47C17.59 14.5 18 13.3 18 12C18 10.7 17.59 9.5 16.89 8.53ZM9.25 7.83C10.04 7.31 11 7 12 7C13 7 13.96 7.31 14.75 7.83L15.47 7.11C14.5 6.42 13.3 6 12 6C10.7 6 9.5 6.42 8.53 7.11L9.25 7.83ZM14.75 16.17C13.96 16.69 13 17 12 17C11 17 10.04 16.69 9.25 16.17L8.53 16.89C9.5 17.59 10.7 18 12 18C13.3 18 14.5 17.59 15.47 16.89L14.75 16.17ZM7.83 14.75C7.31 13.96 7 13 7 12C7 11 7.31 10.04 7.83 9.25L7.11 8.53C6.42 9.5 6 10.7 6 12C6 13.3 6.42 14.5 7.11 15.47L7.83 14.75Z" />
    </Svg>
  );
};
