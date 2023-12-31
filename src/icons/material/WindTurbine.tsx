import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WindTurbineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.3299 11.6696L16.2099 14.5796C17.6199 13.1596 16.2099 11.7496 16.2099 11.7496L14.7199 10.2396C14.8999 9.85964 14.9999 9.43964 14.9999 8.99964C14.9999 7.94964 14.4599 7.02964 13.6399 6.49964L14.9999 2.10964C13.0899 1.52964 12.4999 3.43964 12.4999 3.43964L11.6899 6.02964C10.4599 6.15964 9.45992 6.99964 9.12992 8.17964L4.66992 9.62964C5.30992 11.5296 7.19992 10.8996 7.19992 10.8996L9.26992 10.2296C9.60992 10.9696 10.2299 11.5396 10.9999 11.8196V18.9996C10.9999 18.9996 8.99992 18.9996 8.99992 20.9996C8.99992 21.4996 8.99992 21.8096 8.99992 21.9996H14.9999V20.9996C14.9999 20.9996 14.9999 18.9996 12.9999 18.9996V11.8196C13.1199 11.7796 13.2299 11.7196 13.3299 11.6696ZM10.4999 8.99964C10.4999 8.60182 10.658 8.22029 10.9393 7.93898C11.2206 7.65768 11.6021 7.49964 11.9999 7.49964C12.3977 7.49964 12.7793 7.65768 13.0606 7.93898C13.3419 8.22029 13.4999 8.60182 13.4999 8.99964C13.4999 9.39747 13.3419 9.779 13.0606 10.0603C12.7793 10.3416 12.3977 10.4996 11.9999 10.4996C11.6021 10.4996 11.2206 10.3416 10.9393 10.0603C10.658 9.779 10.4999 9.39747 10.4999 8.99964Z" />
    </Svg>
  );
};
