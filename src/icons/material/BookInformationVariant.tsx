import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookInformationVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 2H12V9L9.5 7.5L7 9V2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.89 19.1 2 18 2ZM17.68 18.41C17.57 18.5 16.47 19.25 16.05 19.5C15.63 19.79 14 20.72 14.26 18.92C14.89 15.28 16.11 13.12 14.65 14.06C14.27 14.29 14.05 14.43 13.91 14.5C13.78 14.61 13.79 14.6 13.68 14.41C13.57 14.22 13.53 14.23 13.67 14.13C13.67 14.13 15.9 12.34 16.72 12.28C17.5 12.21 17.31 13.17 17.24 13.61C16.78 15.46 15.94 18.15 16.07 18.54C16.18 18.93 17 18.31 17.44 18C17.44 18 17.5 17.93 17.61 18.05C17.72 18.22 17.83 18.3 17.68 18.41ZM16.97 11.06C16.4 11.06 15.94 10.6 15.94 10.03C15.94 9.46 16.4 9 16.97 9C17.54 9 18 9.46 18 10.03C18 10.6 17.54 11.06 16.97 11.06Z" />
    </Svg>
  );
};
