import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpeedometerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 16C11.2044 16 10.4413 15.6839 9.87868 15.1213C9.31607 14.5587 9 13.7956 9 13C9 11.88 9.61 10.9 10.5 10.39L20.21 4.77L14.68 14.35C14.18 15.33 13.17 16 12 16ZM12 3C13.81 3 15.5 3.5 16.97 4.32L14.87 5.53C14 5.19 13 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.21 4.89 17.21 6.34 18.65H6.35C6.74 19.04 6.74 19.67 6.35 20.06C5.96 20.45 5.32 20.45 4.93 20.07C3.12 18.26 2 15.76 2 13C2 10.3478 3.05357 7.8043 4.92893 5.92893C6.8043 4.05357 9.34784 3 12 3ZM22 13C22 15.76 20.88 18.26 19.07 20.07C18.68 20.45 18.05 20.45 17.66 20.06C17.27 19.67 17.27 19.04 17.66 18.65C19.11 17.2 20 15.21 20 13C20 12 19.81 11 19.46 10.1L20.67 8C21.5 9.5 22 11.18 22 13Z" />
    </Svg>
  );
};
