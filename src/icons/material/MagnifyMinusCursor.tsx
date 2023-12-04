import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MagnifyMinusCursorIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 4C12.8565 4 14.637 4.7375 15.9497 6.05025C17.2625 7.36301 18 9.14348 18 11C18 12.5 17.5 14 16.61 15.19L17.42 16H18L23 21L21 23L16 18V17.41L15.19 16.6C12.1 18.92 7.71 18.29 5.39 15.2C3.07 12.11 3.7 7.72 6.79 5.4C8 4.5 9.5 4 11 4ZM7 10V12H15V10H7ZM1 1V8L8 1H1Z" />
    </Svg>
  );
};
