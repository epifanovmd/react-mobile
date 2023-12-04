import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PyramidOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.5 7.30047L9.04999 5.85047L11.15 2.47047C11.35 2.16047 11.67 2.00047 12 2.00047C12.33 2.00047 12.65 2.16047 12.85 2.47047L21.85 16.9605C22.13 17.4005 22 18.0005 21.5 18.3205L18.41 15.2105L13 6.50047V9.80047L11 7.80047V6.50047L10.5 7.30047ZM22.11 21.4605L20.84 22.7305L17.89 19.7805L12.36 21.9305C12.25 22.0005 12.12 22.0005 12 22.0005C11.88 22.0005 11.75 22.0005 11.64 21.9305L2.63999 18.4305C1.99999 18.1805 1.83999 17.4505 2.14999 16.9605L7.09999 9.00047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605ZM5.41999 15.5005L11 13.3205V12.8905L8.54999 10.4405L5.41999 15.5005ZM16.35 18.2405L13.94 15.8305L12 15.0705L5.75999 17.5005L12 19.9305L16.35 18.2405Z" />
    </Svg>
  );
};
