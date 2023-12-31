import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmokeDetectorVariantAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 4C14.4 4 18 7.6 18 12C18 16.4 14.4 20 10 20C5.6 20 2 16.4 2 12C2 7.6 5.6 4 10 4ZM10 2C4.5 2 0 6.5 0 12C0 17.5 4.5 22 10 22C15.5 22 20 17.5 20 12C20 6.5 15.5 2 10 2ZM10 11C9.4 11 9 11.4 9 12C9 12.6 9.4 13 10 13C10.6 13 11 12.6 11 12C11 11.4 10.6 11 10 11ZM8.7 9.3C9.1 9.1 9.5 9 10 9C10.5 9 10.9 9.1 11.3 9.3L12 8.6C11.4 8.2 10.7 8 10 8C9.3 8 8.6 8.2 8 8.6L8.7 9.3ZM13 12C13 12.5 12.9 12.9 12.7 13.3L13.4 14C13.8 13.4 14 12.7 14 12C14 11.3 13.8 10.6 13.4 10L12.7 10.7C12.9 11.1 13 11.5 13 12ZM7 12C7 11.5 7.1 11.1 7.3 10.7L6.6 10C6.2 10.6 6 11.3 6 12C6 12.7 6.2 13.4 6.6 14L7.3 13.3C7.1 12.9 7 12.5 7 12ZM11.3 14.7C10.9 14.9 10.5 15 10 15C9.5 15 9.1 14.9 8.7 14.7L8 15.4C8.6 15.8 9.3 16 10 16C10.7 16 11.4 15.8 12 15.4L11.3 14.7ZM14.9 8.5L14.2 9.2C14.7 10 15 11 15 12C15 13 14.7 14 14.2 14.8L14.9 15.5C15.6 14.5 16 13.3 16 12C16 10.7 15.6 9.5 14.9 8.5ZM7.2 7.8C8 7.3 9 7 10 7C11 7 12 7.3 12.8 7.8L13.5 7.1C12.5 6.4 11.3 6 10 6C8.7 6 7.5 6.4 6.5 7.1L7.2 7.8ZM12.8 16.2C12 16.7 11 17 10 17C9 17 8 16.7 7.2 16.2L6.5 16.9C7.5 17.6 8.7 18 10 18C11.3 18 12.5 17.6 13.5 16.9L12.8 16.2ZM5.8 14.8C5.3 14 5 13 5 12C5 11 5.3 10 5.8 9.2L5.1 8.5C4.4 9.5 4 10.7 4 12C4 13.3 4.4 14.5 5.1 15.5L5.8 14.8ZM24 7H22V13H24V8V7ZM24 15H22V17H24V15Z" />
    </Svg>
  );
};
