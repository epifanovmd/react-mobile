import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SunSnowflakeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.9999 0.689453L8.68994 3.99945H3.99994V8.68945L0.689941 11.9995L3.99994 15.3095V19.9995H8.68994L11.9999 23.3095L12.9999 22.3095V17.8295L16.2399 21.0695L17.6599 19.6595L12.9999 14.9995V12.9995H14.9999L19.6599 17.6595L21.0699 16.2395L17.8299 12.9995H21.9999V10.9995H17.8299L21.0699 7.75945L19.6599 6.33945L14.9999 10.9995H12.9999V8.99945L17.6599 4.33945L16.2399 2.92945L12.9999 6.16945V1.68945L11.9999 0.689453ZM10.9999 6.08945V8.12945C9.23994 8.58945 7.99994 10.1795 7.99994 11.9995C7.99994 13.8195 9.23994 15.4095 10.9999 15.8695V17.9095C8.11994 17.4195 5.99994 14.9295 5.99994 11.9995C5.99994 9.06945 8.10994 6.56945 10.9999 6.08945Z" />
    </Svg>
  );
};
