import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CogClockwiseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3ZM7.71 13.16C7.62 13.23 7.59 13.35 7.64 13.45L8.54 15C8.6 15.12 8.72 15.12 8.82 15.12L9.95 14.67C10.19 14.83 10.44 14.97 10.7 15.09L10.88 16.28C10.9 16.39 11 16.47 11.1 16.47H12.9C13 16.5 13.11 16.41 13.13 16.3L13.31 15.12C13.58 15 13.84 14.85 14.07 14.67L15.19 15.12C15.3 15.16 15.42 15.11 15.47 15L16.37 13.5C16.42 13.38 16.39 13.26 16.31 13.19L15.31 12.45C15.34 12.15 15.34 11.85 15.31 11.55L16.31 10.79C16.4 10.72 16.42 10.61 16.37 10.5L15.47 8.95C15.41 8.85 15.3 8.81 15.19 8.85L14.07 9.3C13.83 9.13 13.57 9 13.3 8.88L13.13 7.69C13.11 7.58 13 7.5 12.9 7.5H11.14C11.04 7.5 10.95 7.57 10.93 7.67L10.76 8.85C10.5 8.97 10.23 9.12 10 9.3L8.85 8.88C8.74 8.84 8.61 8.89 8.56 9L7.65 10.5C7.6 10.62 7.63 10.74 7.71 10.81L8.71 11.55C8.69 11.7 8.69 11.85 8.71 12C8.7 12.15 8.7 12.3 8.71 12.45L7.71 13.19V13.16ZM12 13.5C11.16 13.5 10.5 12.82 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5Z" />
    </Svg>
  );
};
