import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HorseVariantFastIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 8V16L20 17L16.91 11.5C16.65 11.04 15.92 11.27 16 11.81L17 21L7 17L8.15 8.94C8.64 5.53 11.56 3 15 3H23L21.42 5.37C22.36 5.88 23 6.86 23 8ZM4 5H7.58C8.08 4.24 8.7 3.57 9.41 3H4C3.45 3 3 3.45 3 4C3 4.55 3.45 5 4 5ZM5.84 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H5.55L5.84 11ZM3 9H6.12L6.17 8.66C6.25 8.08 6.39 7.53 6.58 7H3C2.45 7 2 7.45 2 8C2 8.55 2.45 9 3 9Z" />
    </Svg>
  );
};
