import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LedStripVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3ZM6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89ZM9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86ZM13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82ZM17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79ZM4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75ZM7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65ZM11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61ZM15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58ZM19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54ZM6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z" />
    </Svg>
  );
};
