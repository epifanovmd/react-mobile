import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CookieCogOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.5 10C13.67 10 13 9.33 13 8.5V8H12.5C11.67 8 11 7.33 11 6.5V5.07C7.91 5.5 5.47 8 5.07 11.08C5.25 10.46 5.82 10 6.5 10C7.33 10 8 10.67 8 11.5C8 12.33 7.33 13 6.5 13C5.71 13 5.07 12.39 5 11.62C5 12.11 5 12.61 5.09 13.12C5.5 15.81 7.54 18.04 10.16 18.74C9.76 18.47 9.5 18 9.5 17.5C9.5 16.67 10.17 16 11 16C11.59 16 12.1 16.35 12.34 16.84C12.16 17.39 12.06 17.97 12 18.57C11.83 18.76 11.6 18.9 11.32 18.96C11.55 19 11.78 19 12 19C12 19.69 12.11 20.36 12.29 21C12.19 21 12.1 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C12 3 13 3 13 4V6H14C14 6 15 6 15 7V8H17C17 8 18 8 18 9V10H20C20 10 20.6 10 20.87 10.5C20.96 11 21 11.5 21 12C21 12.1 21 12.19 21 12.29C20.36 12.11 19.69 12 19 12H17.5C16.67 12 16 11.33 16 10.5V10H14.5ZM11.5 11C10.67 11 10 11.67 10 12.5C10 13.33 10.67 14 11.5 14C12.33 14 13 13.33 13 12.5C13 11.67 12.33 11 11.5 11ZM11 7.5C11 6.67 10.33 6 9.5 6C8.67 6 8 6.67 8 7.5C8 8.33 8.67 9 9.5 9C10.33 9 11 8.33 11 7.5ZM23.8 20.4C23.9 20.4 23.9 20.5 23.8 20.6L22.8 22.3C22.7 22.4 22.6 22.4 22.5 22.4L21.3 22C21 22.2 20.8 22.3 20.5 22.5L20.3 23.8C20.3 23.9 20.2 24 20.1 24H18.1C18 24 17.9 23.9 17.8 23.8L17.6 22.5C17.3 22.4 17 22.2 16.8 22L15.6 22.5C15.5 22.5 15.4 22.5 15.3 22.4L14.3 20.7C14.2 20.6 14.3 20.5 14.4 20.4L15.5 19.6V18.6L14.4 17.8C14.3 17.7 14.3 17.6 14.3 17.5L15.3 15.8C15.4 15.7 15.5 15.7 15.6 15.7L16.8 16.2C17.1 16 17.3 15.9 17.6 15.7L17.8 14.4C17.8 14.3 17.9 14.2 18.1 14.2H20.1C20.2 14.2 20.3 14.3 20.3 14.4L20.5 15.7C20.8 15.8 21.1 16 21.4 16.2L22.6 15.7C22.7 15.7 22.9 15.7 22.9 15.8L23.9 17.5C24 17.6 23.9 17.7 23.8 17.8L22.7 18.6V19.6L23.8 20.4ZM20.5 19C20.5 18.2 19.8 17.5 19 17.5C18.2 17.5 17.5 18.2 17.5 19C17.5 19.8 18.2 20.5 19 20.5C19.8 20.5 20.5 19.8 20.5 19Z" />
    </Svg>
  );
};
