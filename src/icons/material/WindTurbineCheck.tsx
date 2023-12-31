import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WindTurbineCheckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.3299 11.6696L14.2099 14.5796C15.6199 13.1596 14.2099 11.7496 14.2099 11.7496L12.7199 10.2396C12.8999 9.85964 12.9999 9.43964 12.9999 8.99964C12.9999 7.94964 12.4599 7.02964 11.6399 6.49964L12.9999 2.10964C11.0899 1.52964 10.4999 3.43964 10.4999 3.43964L9.68992 6.02964C8.45992 6.15964 7.45992 6.99964 7.12992 8.17964L2.66992 9.62964C3.30992 11.5296 5.19992 10.8996 5.19992 10.8996L7.26992 10.2296C7.60992 10.9696 8.22992 11.5396 8.99992 11.8196V18.9996C8.99992 18.9996 6.99992 18.9996 6.99992 20.9996V21.9996H12.9999V20.9996C12.9999 20.9996 12.9999 18.9996 10.9999 18.9996V11.8196C11.1199 11.7796 11.2299 11.7196 11.3299 11.6696ZM8.49992 8.99964C8.49992 8.16964 9.16992 7.49964 9.99992 7.49964C10.8299 7.49964 11.4999 8.16964 11.4999 8.99964C11.4999 9.82964 10.8299 10.4996 9.99992 10.4996C9.16992 10.4996 8.49992 9.82964 8.49992 8.99964ZM16.7499 21.1596L13.9999 18.1596L15.1599 16.9996L16.7499 18.5896L20.3399 14.9996L21.4999 16.4096L16.7499 21.1596Z" />
    </Svg>
  );
};
