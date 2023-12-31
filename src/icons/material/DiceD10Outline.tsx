import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiceD10OutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.5001 16H9.00006V10.21L7.22006 10.76V9.53L10.3601 8.41H10.5001V16ZM14.0701 8.21C15.5001 8.21 16.6401 9.36 16.6401 10.78V13.42C16.6401 14.84 15.5001 16 14.0701 16C12.6401 16 11.5001 14.84 11.5001 13.42V10.78C11.5001 9.36 12.6501 8.21 14.0701 8.21ZM14.0601 9.65C13.4701 9.65 13.0001 10.13 13.0001 10.71V13.5C13.0001 14.07 13.4701 14.54 14.0601 14.54C14.6401 14.54 15.1401 14.06 15.1401 13.5V10.71C15.1401 10.12 14.6401 9.65 14.0601 9.65ZM12.0001 2C11.5001 2 11.0001 2.19 10.5901 2.59L2.59006 10.59C1.80006 11.37 1.80006 12.63 2.59006 13.41L10.5901 21.41C11.3701 22.2 12.6301 22.2 13.4101 21.41L21.4101 13.41C22.2001 12.63 22.2001 11.37 21.4101 10.59L13.4101 2.59C13.0001 2.19 12.5001 2 12.0001 2ZM12.0001 4L20.0001 12L12.0001 20L4.00006 12L12.0001 4Z" />
    </Svg>
  );
};
