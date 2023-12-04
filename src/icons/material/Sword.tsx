import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SwordIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.92 5H5L14 14L15 13.06L6.92 5ZM19.96 19.12L19.12 19.96C18.73 20.35 18.1 20.35 17.71 19.96L14.59 16.84L11.91 19.5L10.5 18.09L11.92 16.67L3 7.75V3H7.75L16.67 11.92L18.09 10.5L19.5 11.91L16.83 14.58L19.95 17.7C20.35 18.1 20.35 18.73 19.96 19.12Z" />
    </Svg>
  );
};
