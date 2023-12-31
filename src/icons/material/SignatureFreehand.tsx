import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SignatureFreehandIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 21.9995H2V19.9995H22V21.9995ZM6.2 17.2995L5.5 17.9995L4.1 16.5995L2.7 17.9995L2 17.2995L3.4 15.8995L2 14.4995L2.7 13.7995L4.1 15.1995L5.5 13.7995L6.2 14.4995L4.8 15.8995L6.2 17.2995ZM16.22 14.4295C16.22 13.8495 15.5 13.1995 14.06 12.4595C12.23 11.5395 11 10.7895 10.36 10.2395C9.71 9.67945 9.39 9.05945 9.39 8.36945C9.39 6.58945 10.3 5.11945 12.12 3.94945C13.94 2.77945 15.43 2.18945 16.57 2.18945C17.31 2.18945 17.85 2.31945 18.18 2.57945C18.5 2.82945 18.68 3.26945 18.68 3.89945C18.68 4.17945 18.56 4.41945 18.31 4.62945C18.07 4.82945 17.87 4.92945 17.74 4.92945C17.63 4.92945 17.43 4.82945 17.13 4.63945L16.55 4.37945C16.08 4.37945 15.14 4.70945 13.71 5.37945C12.29 6.03945 11.58 6.78945 11.58 7.62945C11.58 8.13945 11.82 8.59945 12.32 8.99945C12.82 9.41945 13.71 9.92945 15 10.5295C16.03 10.9995 16.86 11.4995 17.5 12.0695C18.1 12.6095 18.41 13.2495 18.41 13.9995C18.41 15.3395 17.47 16.4095 15.58 17.1695C13.7 17.9395 11.9 18.3195 10.19 18.3195C8.75 18.3195 8 17.8295 8 16.8595C8 16.4995 8.19 16.2695 8.5 16.1095C8.83 15.9495 9.16 15.8695 9.5 15.8695L10.25 15.9995L10.97 16.1295C11.95 16.1295 13 15.9695 14.13 15.6395C15.26 15.3195 15.96 14.9095 16.22 14.4295Z" />
    </Svg>
  );
};
