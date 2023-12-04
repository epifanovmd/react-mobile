import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RadiologyBoxOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 5V19H5V5H19ZM19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM12 6C12.55 6 13 6.45 13 7V8H16.17C16.35 8.31 16.5 8.65 16.66 9H13V10H17C17.1 10.33 17.17 10.67 17.19 11H13V12H17.2C17.16 12.35 17.15 12.69 17.1 13H13V14H17C17 14 16.94 17 15.5 17C14.15 17 14.5 15.47 13 15V17C13 17.55 12.55 18 12 18C11.45 18 11 17.55 11 17V15C9.5 15.47 9.85 17 8.5 17C7.06 17 7 14 7 14H11V13H6.9C6.85 12.69 6.84 12.35 6.8 12H11V11H6.81C6.83 10.67 6.91 10.33 7 10H11V9H7.34C7.5 8.65 7.65 8.31 7.83 8H11V7C11 6.45 11.45 6 12 6Z" />
    </Svg>
  );
};
