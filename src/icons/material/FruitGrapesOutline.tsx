import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FruitGrapesOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 12C19 10.61 18.05 9.47 16.78 9.12C16.92 8.78 17 8.4 17 8C17 6.34 15.66 5 14 5C13.57 5 13.17 5.1 12.81 5.26C13 4.19 13.39 2.59 14.4 2.2L13.6 1C11.9 1.77 11.4 4.09 11.26 5.29C10.87 5.11 10.45 5 10 5C8.34 5 7 6.34 7 8C7 8.4 7.08 8.77 7.22 9.12C5.94 9.46 5 10.62 5 12C5 13.39 5.95 14.54 7.23 14.88C7.09 15.22 7 15.6 7 16C7 17.39 7.94 18.54 9.22 18.88C9.08 19.23 9 19.61 9 20C9 21.66 10.34 23 12 23C13.66 23 15 21.66 15 20C15 19.61 14.92 19.23 14.78 18.88C16.06 18.54 17 17.39 17 16C17 15.6 16.92 15.23 16.77 14.88C18.05 14.54 19 13.39 19 12ZM16.31 9.88V9.9H16.3L16.31 9.88ZM14 6.5C14.83 6.5 15.5 7.17 15.5 8C15.5 8.83 14.83 9.5 14 9.5C13.17 9.5 12.5 8.83 12.5 8C12.5 7.17 13.17 6.5 14 6.5ZM13.5 12C13.5 12.83 12.83 13.5 12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12ZM10 6.5C10.83 6.5 11.5 7.17 11.5 8C11.5 8.83 10.83 9.5 10 9.5C9.17 9.5 8.5 8.83 8.5 8C8.5 7.17 9.17 6.5 10 6.5ZM6.5 12C6.5 11.17 7.17 10.5 8 10.5C8.83 10.5 9.5 11.17 9.5 12C9.5 12.83 8.83 13.5 8 13.5C7.17 13.5 6.5 12.83 6.5 12ZM8.5 16C8.5 15.17 9.17 14.5 10 14.5C10.83 14.5 11.5 15.17 11.5 16C11.5 16.83 10.83 17.5 10 17.5C9.17 17.5 8.5 16.83 8.5 16ZM12 21.5C11.17 21.5 10.5 20.83 10.5 20C10.5 19.17 11.17 18.5 12 18.5C12.83 18.5 13.5 19.17 13.5 20C13.5 20.83 12.83 21.5 12 21.5ZM14 17.5C13.17 17.5 12.5 16.83 12.5 16C12.5 15.17 13.17 14.5 14 14.5C14.83 14.5 15.5 15.17 15.5 16C15.5 16.83 14.83 17.5 14 17.5ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" />
    </Svg>
  );
};
