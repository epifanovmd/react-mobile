import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SnakeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.5 17H18C19.1 17 20 16.1 20 15C20 13.9 19.1 13 18 13V9C18 8 18 7 16.92 6.14C16.97 5.93 17 5.72 17 5.5C17 3.57 15 2 12.5 2C10.24 2 8.38 3.31 8.07 5H6L3.71 2.79L3 3.5L5 5.5L3 7.5L3.71 8.21L6 6H8.07C8.38 7.69 10.24 9 12.5 9C13 9 13.5 8.92 13.93 8.8C13.97 8.87 14 8.94 14 9V13H8C6.9 13 6 13.9 6 15C6 16.1 6.9 17 8 17H6.5C5.12 17 4 18.12 4 19.5C4 19.67 4 19.84 4.05 20H4C2.9 20 2 20.9 2 22H19.5C20.88 22 22 20.88 22 19.5C22 18.12 20.88 17 19.5 17ZM12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5Z" />
    </Svg>
  );
};
