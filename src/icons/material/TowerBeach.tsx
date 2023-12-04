import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TowerBeachIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 4V8H18V10H17.64L21 23H18.93L18.37 20.83L12 17.15L5.63 20.83L5.07 23H3L6.36 10H6V8H7V4H6V3L18 1V4H17ZM7.28 14.43L6.33 18.12L10 16L7.28 14.43ZM15.57 10H8.43L7.8 12.42L12 14.85L16.2 12.42L15.57 10ZM17.67 18.12L16.72 14.43L14 16L17.67 18.12Z" />
    </Svg>
  );
};
