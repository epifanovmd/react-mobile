import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseMarkerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 12C16.6 12 15 13.6 15 15.5C15 18.1 18.5 22 18.5 22C18.5 22 22 18.1 22 15.5C22 13.6 20.4 12 18.5 12ZM18.5 16.8C17.8 16.8 17.3 16.2 17.3 15.6C17.3 14.9 17.9 14.4 18.5 14.4C19.1 14.4 19.7 15 19.7 15.6C19.8 16.2 19.2 16.8 18.5 16.8ZM4 12V9C4 11.21 7.58 13 12 13C12.57 13 13.13 12.97 13.67 12.91C13.25 13.69 13 14.57 13 15.5C13 15.65 13 15.81 13.03 15.96C12.69 16 12.35 16 12 16C7.58 16 4 14.21 4 12ZM4 7C4 4.79 7.58 3 12 3C16.42 3 20 4.79 20 7C20 9.21 16.42 11 12 11C7.58 11 4 9.21 4 7ZM15 20.71C14.07 20.9 13.06 21 12 21C7.58 21 4 19.21 4 17V14C4 16.21 7.58 18 12 18C12.5 18 13.03 17.97 13.5 17.93C13.9 18.91 14.44 19.87 15 20.71Z" />
    </Svg>
  );
};
