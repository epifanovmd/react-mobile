import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldPlusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 20V22.97H17V20H14V18H17V15H19V18H22V20H19ZM21 11C21 11.9 20.9 12.78 20.71 13.65C20.13 13.35 19.5 13.15 18.81 13.05C18.93 12.45 19 11.83 19 11.22V6.3L12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21L12.31 20.91C12.5 21.53 12.83 22.11 13.22 22.62L12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11Z" />
    </Svg>
  );
};
