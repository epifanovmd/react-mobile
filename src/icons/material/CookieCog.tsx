import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CookieCogIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 12.29C21 12.19 21 12.1 21 12C21 11.5 20.96 11 20.87 10.5C20.6 10 20 10 20 10H18V9C18 8 17 8 17 8H15V7C15 6 14 6 14 6H13V4C13 3 12 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C12.1 21 12.19 21 12.29 21C12.11 20.36 12 19.69 12 19C12 18.86 12 18.73 12 18.59C11.75 18.84 11.4 19 11 19C10.17 19 9.5 18.33 9.5 17.5C9.5 16.67 10.17 16 11 16C11.59 16 12.1 16.35 12.34 16.84C13.25 14.03 15.89 12 19 12C19.69 12 20.36 12.11 21 12.29ZM6.5 13C5.67 13 5 12.33 5 11.5C5 10.67 5.67 10 6.5 10C7.33 10 8 10.67 8 11.5C8 12.33 7.33 13 6.5 13ZM9.5 9C8.67 9 8 8.33 8 7.5C8 6.67 8.67 6 9.5 6C10.33 6 11 6.67 11 7.5C11 8.33 10.33 9 9.5 9ZM11.5 14C10.67 14 10 13.33 10 12.5C10 11.67 10.67 11 11.5 11C12.33 11 13 11.67 13 12.5C13 13.33 12.33 14 11.5 14ZM22.7 19.6V18.6L23.8 17.8C23.9 17.7 24 17.6 23.9 17.5L22.9 15.8C22.9 15.7 22.7 15.7 22.6 15.7L21.4 16.2C21.1 16 20.8 15.8 20.5 15.7L20.3 14.4C20.3 14.3 20.2 14.2 20.1 14.2H18.1C17.9 14.2 17.8 14.3 17.8 14.4L17.6 15.7C17.3 15.9 17.1 16 16.8 16.2L15.6 15.7C15.5 15.7 15.4 15.7 15.3 15.8L14.3 17.5C14.3 17.6 14.3 17.7 14.4 17.8L15.5 18.6V19.6L14.4 20.4C14.3 20.5 14.2 20.6 14.3 20.7L15.3 22.4C15.4 22.5 15.5 22.5 15.6 22.5L16.8 22C17 22.2 17.3 22.4 17.6 22.5L17.8 23.8C17.9 23.9 18 24 18.1 24H20.1C20.2 24 20.3 23.9 20.3 23.8L20.5 22.5C20.8 22.3 21 22.2 21.3 22L22.5 22.4C22.6 22.4 22.7 22.4 22.8 22.3L23.8 20.6C23.9 20.5 23.9 20.4 23.8 20.4L22.7 19.6ZM19 20.5C18.2 20.5 17.5 19.8 17.5 19C17.5 18.2 18.2 17.5 19 17.5C19.8 17.5 20.5 18.2 20.5 19C20.5 19.8 19.8 20.5 19 20.5Z" />
    </Svg>
  );
};
