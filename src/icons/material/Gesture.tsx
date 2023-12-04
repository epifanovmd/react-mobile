import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GestureIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.58997 6.89C5.28997 6.18 5.99997 5.54 6.29997 5.67C6.79997 5.87 6.29997 6.7 5.99997 7.19C5.74997 7.61 3.13997 11.08 3.13997 13.5C3.13997 14.78 3.61997 15.84 4.49997 16.5C5.22997 17.04 6.21997 17.21 7.11997 16.94C8.18997 16.63 9.06997 15.54 10.18 14.17C11.39 12.68 13 10.73 14.26 10.73C15.89 10.73 15.91 11.74 16 12.5C12.24 13.16 10.64 16.19 10.64 17.89C10.64 19.59 12.08 21 13.85 21C15.5 21 18.14 19.65 18.54 14.88H21V12.38H18.53C18.38 10.73 17.44 8.18 14.5 8.18C12.25 8.18 10.32 10.09 9.55997 11C8.99997 11.75 7.49997 13.5 7.26997 13.74C6.99997 14.04 6.58997 14.58 6.15997 14.58C5.70997 14.58 5.43997 13.75 5.79997 12.66C6.14997 11.57 7.19997 9.8 7.64997 9.14C8.42997 8 8.94997 7.22 8.94997 5.86C8.94997 3.69 7.30997 3 6.43997 3C5.11997 3 3.96997 4 3.71997 4.25C3.35997 4.61 3.05997 4.91 2.83997 5.18L4.58997 6.89ZM13.88 18.55C13.57 18.55 13.14 18.29 13.14 17.83C13.14 17.23 13.87 15.63 16 15.07C15.71 17.76 14.58 18.55 13.88 18.55Z" />
    </Svg>
  );
};
