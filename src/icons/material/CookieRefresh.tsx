import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CookieRefreshIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 16C11.53 16 12 16.28 12.26 16.69C13.04 14 15.54 12 18.5 12C19.38 12 20.21 12.18 21 12.5C21 12.33 21 12.17 21 12C21 11.5 20.96 11 20.87 10.5C20.6 10 20 10 20 10H18V9C18 8 17 8 17 8H15V7C15 6 14 6 14 6H13V4C13 3 12 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C12.17 21 12.33 21 12.5 21C12.19 20.24 12 19.44 12 18.61C11.74 18.85 11.39 19 11 19C10.17 19 9.5 18.33 9.5 17.5C9.5 16.67 10.17 16 11 16ZM13 12.5C13 13.33 12.33 14 11.5 14C10.67 14 10 13.33 10 12.5C10 11.67 10.67 11 11.5 11C12.33 11 13 11.67 13 12.5ZM6.5 13C5.67 13 5 12.33 5 11.5C5 10.67 5.67 10 6.5 10C7.33 10 8 10.67 8 11.5C8 12.33 7.33 13 6.5 13ZM8 7.5C8 6.67 8.67 6 9.5 6C10.33 6 11 6.67 11 7.5C11 8.33 10.33 9 9.5 9C8.67 9 8 8.33 8 7.5ZM18 18.5L19.77 16.73C19.32 16.28 18.69 16 18 16C16.62 16 15.5 17.12 15.5 18.5C15.5 19.88 16.62 21 18 21C18.82 21 19.54 20.61 20 20H21.71C21.12 21.47 19.68 22.5 18 22.5C15.79 22.5 14 20.71 14 18.5C14 16.29 15.79 14.5 18 14.5C19.11 14.5 20.11 14.95 20.83 15.67L22 14.5V18.5H18Z" />
    </Svg>
  );
};
