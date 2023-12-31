import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherNightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.7501 4.09L15.2201 6.03L16.1301 9.09L13.5001 7.28L10.8701 9.09L11.7801 6.03L9.25007 4.09L12.4401 4L13.5001 1L14.5601 4L17.7501 4.09ZM21.2501 11L19.6101 12.25L20.2001 14.23L18.5001 13.06L16.8001 14.23L17.3901 12.25L15.7501 11L17.8101 10.95L18.5001 9L19.1901 10.95L21.2501 11ZM18.9701 15.95C19.8001 15.87 20.6901 17.05 20.1601 17.8C19.8401 18.25 19.5001 18.67 19.0801 19.07C15.1701 23 8.84007 23 4.94007 19.07C1.03007 15.17 1.03007 8.83 4.94007 4.93C5.34007 4.53 5.76007 4.17 6.21007 3.85C6.96007 3.32 8.14007 4.21 8.06007 5.04C7.79007 7.9 8.75007 10.87 10.9501 13.06C13.1401 15.26 16.1001 16.22 18.9701 15.95ZM17.3301 17.97C14.5001 17.81 11.7001 16.64 9.53007 14.5C7.36007 12.31 6.20007 9.5 6.04007 6.68C3.23007 9.82 3.34007 14.64 6.35007 17.66C9.37007 20.67 14.1901 20.78 17.3301 17.97Z" />
    </Svg>
  );
};
