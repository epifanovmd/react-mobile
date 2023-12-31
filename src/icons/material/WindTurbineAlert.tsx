import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WindTurbineAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.3299 11.6696L15.2099 14.5796C16.6199 13.1596 15.2099 11.7496 15.2099 11.7496L13.7199 10.2396C13.8999 9.85964 13.9999 9.43964 13.9999 8.99964C13.9999 7.94964 13.4599 7.02964 12.6399 6.49964L13.9999 2.10964C12.0899 1.52964 11.4999 3.43964 11.4999 3.43964L10.6899 6.02964C9.45992 6.15964 8.45992 6.99964 8.12992 8.17964L3.66992 9.62964C4.30992 11.5296 6.19992 10.8996 6.19992 10.8996L8.26992 10.2296C8.60992 10.9696 9.22992 11.5396 9.99992 11.8196V18.9996C9.99992 18.9996 7.99992 18.9996 7.99992 20.9996V21.9996H13.9999V20.9996C13.9999 20.9996 13.9999 18.9996 11.9999 18.9996V11.8196C12.1199 11.7796 12.2299 11.7196 12.3299 11.6696ZM9.49992 8.99964C9.49992 8.16964 10.1699 7.49964 10.9999 7.49964C11.8299 7.49964 12.4999 8.16964 12.4999 8.99964C12.4999 9.82964 11.8299 10.4996 10.9999 10.4996C10.1699 10.4996 9.49992 9.82964 9.49992 8.99964ZM17.9999 11.9996V6.99964H19.9999V12.9996H17.9999V11.9996ZM17.9999 16.9996V14.9996H19.9999V16.9996H17.9999Z" />
    </Svg>
  );
};
