import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodVariantOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.28 3L1 4.27L3.31 6.58C2.91 8.7 2.55 10.8 2.33 12.83C2 16 2 19 2 22H9C9 19 9 16 8.67 12.83C8.63 12.5 8.58 12.15 8.54 11.81L12.73 16H11V18C11 20.21 12.79 22 15 22H18C18.23 22 18.45 22 18.67 21.94L19.73 23L21 21.72L2.28 3ZM4.82 3L7.53 5.71C7.5 5.47 7.45 5.24 7.4 5H8V3H7H4.82ZM20.55 11.23L17.8 16L21.59 19.76C21.86 19.21 22 18.61 22 18V16H19.87L22.11 12.13L20.55 11.23Z" />
    </Svg>
  );
};
