import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CookieMinusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 10H14.5C13.67 10 13 9.33 13 8.5V8H12.5C11.67 8 11 7.33 11 6.5V5.07C7.91 5.5 5.47 8 5.07 11.08C5.25 10.46 5.82 10 6.5 10C7.33 10 8 10.67 8 11.5C8 12.33 7.33 13 6.5 13C5.71 13 5.07 12.39 5 11.62C5 12.11 5 12.61 5.09 13.12C5.5 15.81 7.54 18.04 10.16 18.74C9.76 18.47 9.5 18 9.5 17.5C9.5 16.67 10.17 16 11 16C11.83 16 12.5 16.67 12.5 17.5C12.5 18.22 12 18.82 11.32 18.96C11.9 19 12.46 19 13 18.92C13 18.95 13 18.97 13 19C13 19.66 13.12 20.3 13.32 20.89C12.89 20.96 12.45 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C12 3 13 3 13 4V6H14C14 6 15 6 15 7V8H17C17 8 18 8 18 9V10H20C20 10 20.6 10 20.87 10.5C20.96 11 21 11.5 21 12C21 12.45 20.96 12.89 20.89 13.32C20.3 13.12 19.66 13 19 13C18.97 13 18.95 13 18.92 13C18.97 12.68 19 12.34 19 12H17.5C16.67 12 16 11.33 16 10.5V10H15ZM15 14.5C15 14.5 15 14.5 15 14.53C15.66 13.95 16.45 13.5 17.32 13.24C17.08 13.09 16.8 13 16.5 13C15.67 13 15 13.67 15 14.5ZM11 7.5C11 6.67 10.33 6 9.5 6C8.67 6 8 6.67 8 7.5C8 8.33 8.67 9 9.5 9C10.33 9 11 8.33 11 7.5ZM11.5 14C12.33 14 13 13.33 13 12.5C13 11.67 12.33 11 11.5 11C10.67 11 10 11.67 10 12.5C10 13.33 10.67 14 11.5 14ZM15 18V20H23V18H15Z" />
    </Svg>
  );
};
