import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherSunnyOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.4605L2.38999 1.73047L1.10999 3.00047L4.96999 6.86047L3.33999 7.00047L5.10999 10.7905C5.24999 10.0005 5.49999 9.24047 5.93999 8.50047C5.99999 8.36047 6.12998 8.24047 6.21999 8.11047L7.65999 9.55047C7.24999 10.2705 6.99999 11.1105 6.99999 12.0005C6.99999 14.7605 9.23999 17.0005 12 17.0005C12.9 17.0005 13.73 16.7505 14.45 16.3405L20.84 22.7305L22.11 21.4605ZM12 15.0005C10.34 15.0005 8.99999 13.6605 8.99999 12.0005C8.99999 11.6705 9.06999 11.3605 9.16999 11.0605L12.94 14.8305C12.64 14.9305 12.33 15.0005 12 15.0005ZM18.05 8.50047C17.63 7.78047 17.1 7.15047 16.5 6.64047L20.65 7.00047L18.88 10.7905C18.74 10.0005 18.47 9.23047 18.05 8.50047ZM12 7.00047C14.76 7.00047 17 9.24047 17 12.0005C17 12.5405 16.89 13.0505 16.74 13.5405L15 11.7805C14.87 10.3005 13.7 9.13047 12.22 9.00047L10.47 7.27047C10.95 7.11047 11.46 7.00047 12 7.00047ZM12 5.00047C11.16 5.00047 10.35 5.15047 9.60999 5.42047L12 2.00047L14.39 5.42047C13.65 5.15047 12.84 5.00047 12 5.00047ZM18.87 13.2105L20.64 17.0005L20.24 17.0405L18.25 15.0505C18.54 14.4505 18.76 13.8405 18.87 13.2105ZM12 19.0005C12.82 19.0005 13.63 18.8305 14.37 18.5605L12 22.0005L9.58999 18.5605C10.33 18.8305 11.14 19.0005 12 19.0005ZM5.94999 15.5005C6.36999 16.2405 6.90999 16.8605 7.49999 17.3705L3.35999 17.0005L5.11999 13.2305C5.25998 14.0005 5.52998 14.7805 5.94999 15.5005Z" />
    </Svg>
  );
};
