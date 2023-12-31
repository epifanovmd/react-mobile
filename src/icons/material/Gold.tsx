import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoldIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 21.9996L2.5 16.9996H9.5L11 21.9996H1ZM13 21.9996L14.5 16.9996H21.5L23 21.9996H13ZM6 14.9996L7.5 9.99961H14.5L16 14.9996H6ZM23 6.04961L19.14 7.13961L18.05 10.9996L16.96 7.13961L13.1 6.04961L16.96 4.95961L18.05 1.09961L19.14 4.95961L23 6.04961Z" />
    </Svg>
  );
};
