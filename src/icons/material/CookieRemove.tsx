import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CookieRemoveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 13C16.8 13 17.08 13.09 17.32 13.24C17.85 13.09 18.42 13 19 13C19.66 13 20.3 13.12 20.89 13.32C20.96 12.89 21 12.45 21 12C21 11.5 20.96 11 20.87 10.5C20.6 10 20 10 20 10H18V9C18 8 17 8 17 8H15V7C15 6 14 6 14 6H13V4C13 3 12 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C12.45 21 12.89 20.96 13.32 20.89C13.12 20.3 13 19.66 13 19C13 17.22 13.78 15.63 15 14.53C15 14.5 15 14.5 15 14.5C15 13.67 15.67 13 16.5 13ZM6.5 13C5.67 13 5 12.33 5 11.5C5 10.67 5.67 10 6.5 10C7.33 10 8 10.67 8 11.5C8 12.33 7.33 13 6.5 13ZM8 7.5C8 6.67 8.67 6 9.5 6C10.33 6 11 6.67 11 7.5C11 8.33 10.33 9 9.5 9C8.67 9 8 8.33 8 7.5ZM11 19C10.17 19 9.5 18.33 9.5 17.5C9.5 16.67 10.17 16 11 16C11.83 16 12.5 16.67 12.5 17.5C12.5 18.33 11.83 19 11 19ZM11.5 14C10.67 14 10 13.33 10 12.5C10 11.67 10.67 11 11.5 11C12.33 11 13 11.67 13 12.5C13 13.33 12.33 14 11.5 14ZM20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.47 21.12L17.59 19L15.47 16.88L16.88 15.47L19 17.59L21.12 15.47L22.54 16.88L20.41 19Z" />
    </Svg>
  );
};
