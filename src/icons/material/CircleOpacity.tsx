import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CircleOpacityIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 10V8H20V10H18ZM18 12V10H16V12H18ZM18 8V6H16V8H18ZM16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84ZM18 4V6H20C19.42 5.25 18.75 4.58 18 4ZM20 6V8H21.16C20.85 7.29 20.46 6.63 20 6ZM22 12C22 11.32 21.93 10.65 21.8 10H20V12H22ZM16 6V4H14V6H16ZM16 16H18V14H16V16ZM18 18H20V16H18V18ZM16 20H18V18H16V20ZM14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8ZM18 14H20V12H18V14ZM16 8H14V10H16V8ZM20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16ZM16 12H14V14H16V12ZM12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22V20H14V18H12ZM14 18H16V16H14V18Z" />
    </Svg>
  );
};
