import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LayersOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.27 1L2 2.27L6.22 6.5L3 9L4.63 10.27L12 16L14.1 14.37L15.53 15.8L12 18.54L4.63 12.81L3 14.07L12 21.07L16.95 17.22L20.73 21L22 19.73L3.27 1ZM19.36 10.27L21 9L12 2L9.09 4.27L16.96 12.15L19.36 10.27ZM19.81 15L21 14.07L19.57 12.64L18.38 13.56L19.81 15Z" />
    </Svg>
  );
};
