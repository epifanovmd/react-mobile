import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CookieEditOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.5 6C10.33 6 11 6.67 11 7.5C11 8.33 10.33 9 9.5 9C8.67 9 8 8.33 8 7.5C8 6.67 8.67 6 9.5 6ZM11.5 11C10.67 11 10 11.67 10 12.5C10 13.33 10.67 14 11.5 14C12.33 14 13 13.33 13 12.5C13 11.67 12.33 11 11.5 11ZM11 16C10.17 16 9.5 16.67 9.5 17.5C9.5 18 9.76 18.47 10.16 18.74C7.54 18.04 5.5 15.81 5.09 13.12C5 12.61 5 12.11 5 11.62C5.07 12.39 5.71 13 6.5 13C7.33 13 8 12.33 8 11.5C8 10.67 7.33 10 6.5 10C5.82 10 5.25 10.46 5.07 11.08C5.47 8 7.91 5.5 11 5.07V6.5C11 7.33 11.67 8 12.5 8H13V8.5C13 9.33 13.67 10 14.5 10H16V10.5C16 11.33 16.67 12 17.5 12H18.13L19.39 10.74C19.69 10.44 20.05 10.24 20.44 10.12C20.21 10 20 10 20 10H18V9C18 8 17 8 17 8H15V7C15 6 14 6 14 6H13V4C13 3 12 3 12 3C7.03 3 3 7.03 3 12C3 16.63 6.5 20.44 11 20.94V19.13L12.47 17.66C12.5 17.6 12.5 17.55 12.5 17.5C12.5 16.67 11.83 16 11 16ZM15 14.5C15 14.69 15.04 14.86 15.1 15.03L17.03 13.1C16.86 13.04 16.69 13 16.5 13C15.67 13 15 13.67 15 14.5ZM22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47ZM13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96Z" />
    </Svg>
  );
};
