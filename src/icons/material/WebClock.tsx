import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WebClockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 12.5V16.5L18 18.5L18.75 17.25L16.5 15.75V12.5H15ZM22 12.39C22 12.26 22 12.13 22 12C22 6.5 17.5 2 12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12.13 22 12.24 22 12.37 21.97C13.43 22.62 14.67 23 16 23C19.86 23 23 19.86 23 16C23 14.68 22.62 13.44 22 12.39ZM19.76 10.11C19.7 10.07 19.65 10.04 19.59 10H19.74C19.75 10.03 19.75 10.07 19.76 10.11ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8ZM12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09C10.5 6.57 11.17 5.23 12 4.03ZM9.66 10H12.41C11.16 10.75 10.15 11.88 9.57 13.24C9.53 12.83 9.5 12.42 9.5 12C9.5 11.32 9.56 10.65 9.66 10ZM9.4 4.44C8.8 5.55 8.35 6.75 8 8H5.08C6.03 6.34 7.57 5.06 9.4 4.44ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57 18.93 6.03 17.65 5.08 16ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21Z" />
    </Svg>
  );
};
