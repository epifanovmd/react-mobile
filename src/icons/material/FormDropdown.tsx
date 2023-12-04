import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormDropdownIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 5H20L18.5 7L17 5ZM3 2H21C22.11 2 23 2.9 23 4V8C23 9.11 22.11 10 21 10H16V20C16 21.11 15.11 22 14 22H3C1.9 22 1 21.11 1 20V4C1 2.9 1.9 2 3 2ZM3 4V8H14V4H3ZM21 8V4H16V8H21ZM3 20H14V10H3V20ZM5 12H12V14H5V12ZM5 16H12V18H5V16Z" />
    </Svg>
  );
};
