import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShapeOvalPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 5H22V7H19V10H17V7H14V5H17V2H19V5ZM11 4L12 4.09V6.14C11.68 6.05 11.34 6 11 6C8.24 6 6 9.13 6 13C6 16.87 8.24 20 11 20C13.76 20 16 16.87 16 13L15.95 12H17.96L18 13C18 17.97 14.87 22 11 22C7.13 22 4 17.97 4 13C4 8.03 7.13 4 11 4Z" />
    </Svg>
  );
};
