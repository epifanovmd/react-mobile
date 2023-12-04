import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardAccountDetailsStarIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 22.09L22.45 23.58L21.8 20.77L24 18.89L21.11 18.64L20 16L18.87 18.64L16 18.89L18.18 20.77L17.5 23.58L20 22.09ZM14.08 21H2C0.95 21 0 20.05 0 19V5C0 3.95 0.95 3 2 3H22C23.05 3 24 3.95 24 5V15.53C22.94 14.58 21.54 14 20 14C16.69 14 14 16.69 14 20C14 20.34 14.03 20.68 14.08 21ZM8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91ZM8 6C6.35 6 5 7.35 5 9C5 10.65 6.35 12 8 12C9.65 12 11 10.65 11 9C11 7.35 9.65 6 8 6ZM21 10H14V11H21V10ZM22 8H14V9H22V8ZM22 6H14V7H22V6Z" />
    </Svg>
  );
};
