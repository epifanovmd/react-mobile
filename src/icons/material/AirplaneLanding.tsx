import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirplaneLandingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.5 19H21.5V21H2.5V19ZM9.68 13.27L14.03 14.43L19.34 15.85C20.14 16.06 20.96 15.59 21.18 14.79C21.39 14 20.92 13.17 20.12 12.95L14.81 11.53L12.05 2.5L10.12 2V10.28L5.15 8.95L4.22 6.63L2.77 6.24V11.41L4.37 11.84L9.68 13.27Z" />
    </Svg>
  );
};
