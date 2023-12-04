import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumbleBundleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.91 18.1209C14.09 18.1209 18.43 2.13086 18.43 2.13086H15.53C15.53 2.13086 14.34 5.89086 13.55 10.0709H11.05C11.11 9.21086 11.15 8.34086 11.13 7.50086C11 0.590859 7 1.87086 5.18 3.45086C3.47 4.95086 2.03 7.80086 2 10.0009C2.27 10.0009 3.35 10.0009 3.35 10.0009C3.35 10.0009 4.25 5.88086 7.07 5.88086C9.89 5.88086 5.54 21.8709 5.54 21.8709H8.45C8.45 21.8709 9.95 17.5909 10.7 12.8109L13.09 12.8009C12.95 14.0409 12.91 15.4009 12.93 16.6709C13.04 23.5609 17.06 22.0809 18.86 20.5009C20.67 18.9209 22 15.5809 22 14.0009H20.61C20.62 14.1209 19.73 18.1209 16.91 18.1209Z" />
    </Svg>
  );
};
