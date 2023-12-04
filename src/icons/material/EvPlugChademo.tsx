import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EvPlugChademoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 9.5C6.1 9.5 5 10.6 5 12C5 13.4 6.1 14.5 7.5 14.5C8.9 14.5 10 13.4 10 12C10 10.6 8.9 9.5 7.5 9.5ZM16.5 9.5C15.1 9.5 14 10.6 14 12C14 13.4 15.1 14.5 16.5 14.5C17.9 14.5 19 13.4 19 12C19 10.6 17.9 9.5 16.5 9.5ZM12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 5C10.6 5 9.5 6.1 9.5 7.5C9.5 8.9 10.6 10 12 10C13.4 10 14.5 8.9 14.5 7.5C14.5 6.1 13.4 5 12 5ZM13.5 7.5C13.5 7.7 13.4 7.9 13.3 8.1L12.7 7.5L13.3 6.9C13.4 7.1 13.5 7.3 13.5 7.5ZM12.6 6.2L12 6.8L11.4 6.2C11.6 6.1 11.8 6 12 6C12.2 6 12.4 6.1 12.6 6.2ZM10.7 8.1C10.6 7.9 10.5 7.7 10.5 7.5C10.5 7.3 10.6 7.1 10.7 6.9L11.3 7.5L10.7 8.1ZM11.4 8.8L12 8.2L12.6 8.8C12.4 8.9 12.2 9 12 9C11.8 9 11.6 8.9 11.4 8.8ZM12 14C10.6 14 9.5 15.1 9.5 16.5C9.5 17.9 10.6 19 12 19C13.4 19 14.5 17.9 14.5 16.5C14.5 15.1 13.4 14 12 14ZM13.5 16.5C13.5 16.7 13.4 16.9 13.3 17.1L12.7 16.5L13.3 15.9C13.4 16.1 13.5 16.3 13.5 16.5ZM12.6 15.2L12 15.8L11.4 15.2C11.6 15.1 11.8 15 12 15C12.2 15 12.4 15.1 12.6 15.2ZM10.7 17.1C10.6 16.9 10.5 16.7 10.5 16.5C10.5 16.3 10.6 16.1 10.7 15.9L11.3 16.5L10.7 17.1ZM11.4 17.8L12 17.2L12.6 17.8C12.4 17.9 12.2 18 12 18C11.8 18 11.6 17.9 11.4 17.8Z" />
    </Svg>
  );
};
