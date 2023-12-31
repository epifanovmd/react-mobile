import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CookieEditIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.1 15.03C15.04 14.86 15 14.69 15 14.5C15 13.67 15.67 13 16.5 13C16.69 13 16.86 13.04 17.03 13.1L19.39 10.74C19.69 10.44 20.05 10.24 20.44 10.12C20.21 10 20 10 20 10H18V9C18 8 17 8 17 8H15V7C15 6 14 6 14 6H13V4C13 3 12 3 12 3C7.03 3 3 7.03 3 12C3 16.63 6.5 20.44 11 20.94V19.13L11.14 19C11.1 19 11.05 19 11 19C10.17 19 9.5 18.33 9.5 17.5C9.5 16.67 10.17 16 11 16C11.83 16 12.5 16.67 12.5 17.5C12.5 17.55 12.5 17.6 12.5 17.64L15.1 15.03ZM6.5 13C5.67 13 5 12.33 5 11.5C5 10.67 5.67 10 6.5 10C7.33 10 8 10.67 8 11.5C8 12.33 7.33 13 6.5 13ZM9.5 9C8.67 9 8 8.33 8 7.5C8 6.67 8.67 6 9.5 6C10.33 6 11 6.67 11 7.5C11 8.33 10.33 9 9.5 9ZM11.5 14C10.67 14 10 13.33 10 12.5C10 11.67 10.67 11 11.5 11C12.33 11 13 11.67 13 12.5C13 13.33 12.33 14 11.5 14ZM22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19ZM19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83Z" />
    </Svg>
  );
};
