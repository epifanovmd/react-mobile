import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirplaneTakeoffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.49997 19H21.5V21H2.49997V19ZM22.07 9.64001C21.86 8.84001 21.03 8.36001 20.23 8.58001L14.92 10L7.99997 3.57001L6.08997 4.08001L10.23 11.25L5.25997 12.58L3.28997 11.04L1.83997 11.43L3.65997 14.59L4.42997 15.92L6.02997 15.5L11.34 14.07L15.69 12.91L21 11.5C21.81 11.26 22.28 10.44 22.07 9.64001Z" />
    </Svg>
  );
};
