import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DeathStarVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.05005 13H21.9401C21.8801 13.69 21.7401 14.36 21.5401 15H14V17H17V19H15V21H12.5V22C12.33 22 12.17 22 12 22C6.82005 22 2.55005 18.05 2.05005 13ZM21.9401 11H2.05005C2.55005 5.95 6.82005 2 12 2C13.62 2 15.15 2.39 16.5 3.08V5H18.5V7H20V9H21.5401C21.7401 9.64 21.8801 10.31 21.9401 11ZM12 6.75C12 6.4217 11.9354 6.09661 11.8097 5.79329C11.6841 5.48998 11.5 5.21438 11.2678 4.98223C11.0357 4.75009 10.7601 4.56594 10.4568 4.4403C10.1534 4.31466 9.82835 4.25 9.50005 4.25C8.83701 4.25 8.20112 4.51339 7.73228 4.98223C7.26344 5.45107 7.00005 6.08696 7.00005 6.75C7.00005 7.41304 7.26344 8.04893 7.73228 8.51777C8.20112 8.98661 8.83701 9.25 9.50005 9.25C9.82835 9.25 10.1534 9.18534 10.4568 9.0597C10.7601 8.93406 11.0357 8.74991 11.2678 8.51777C11.5 8.28562 11.6841 8.01002 11.8097 7.70671C11.9354 7.40339 12 7.0783 12 6.75Z" />
    </Svg>
  );
};
