import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SharkOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.26 8.06047L18.53 15.3305C19 15.1705 19.46 15.0005 19.87 14.8105C19.72 14.6305 19.53 14.4405 19.28 14.3005C18.63 13.9105 17.82 13.6705 17 13.5005C17.82 13.3405 18.67 13.2205 19.59 13.3505C20.05 13.4105 20.54 13.5405 21 13.8605C21.1 13.9205 21.17 14.0005 21.24 14.0505C22.4 13.2605 23 12.4405 23 12.0005C23 11.1305 19.19 9.50047 15.56 9.09047C14.66 7.18047 12.54 6.00047 11 6.00047C11.25 6.76047 11.31 7.45047 11.26 8.06047ZM17.23 10.3805C17.84 10.5005 18.43 10.6705 18.97 10.8405C19 10.8905 19 10.9405 19 11.0005C19 11.5505 18.55 12.0005 18 12.0005C17.45 12.0005 17 11.5505 17 11.0005C17 10.7605 17.1 10.5505 17.23 10.3805ZM22.11 21.4605L20.84 22.7305L15.42 17.3105C14.88 17.7505 14.35 18.0005 14 18.0005V16.0005C11 16.0005 6 14.0005 6 14.0005C6 14.0005 4 17.0005 2 17.0005L3 13.0005L1 7.00047C3 7.00047 6 11.0005 6 11.0005C6 11.0005 6.96 10.6205 8.3 10.1905L1.11 3.00047L2.39 1.73047L22.11 21.4605Z" />
    </Svg>
  );
};
