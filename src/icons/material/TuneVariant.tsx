import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TuneVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21C9.86 21 11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13ZM8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15C9.1 15 10 15.9 10 17C10 18.1 9.1 19 8 19ZM19.86 6C19.41 4.28 17.86 3 16 3C14.14 3 12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11C17.86 11 19.41 9.72 19.86 8H22V6H19.86ZM16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5C17.1 5 18 5.9 18 7C18 8.1 17.1 9 16 9Z" />
    </Svg>
  );
};
