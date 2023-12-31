import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const IncognitoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.06 13.0001C15.2 13.0001 13.64 14.3301 13.24 16.1001C12.29 15.6901 11.42 15.8001 10.76 16.0901C10.35 14.3101 8.79 13.0001 6.94 13.0001C4.77 13.0001 3 14.7901 3 17.0001C3 19.2101 4.77 21.0001 6.94 21.0001C9 21.0001 10.68 19.3801 10.84 17.3201C11.18 17.0801 12.07 16.6301 13.16 17.3401C13.34 19.3901 15 21.0001 17.06 21.0001C19.23 21.0001 21 19.2101 21 17.0001C21 14.7901 19.23 13.0001 17.06 13.0001ZM6.94 19.8601C5.38 19.8601 4.13 18.5801 4.13 17.0001C4.13 15.4201 5.39 14.1401 6.94 14.1401C8.5 14.1401 9.75 15.4201 9.75 17.0001C9.75 18.5801 8.5 19.8601 6.94 19.8601ZM17.06 19.8601C15.5 19.8601 14.25 18.5801 14.25 17.0001C14.25 15.4201 15.5 14.1401 17.06 14.1401C18.62 14.1401 19.88 15.4201 19.88 17.0001C19.88 18.5801 18.61 19.8601 17.06 19.8601ZM22 10.5001H2V12.0001H22V10.5001ZM15.53 2.63012C15.31 2.14012 14.75 1.88012 14.22 2.05012L12 2.79012L9.77 2.05012L9.72 2.04012C9.19 1.89012 8.63 2.17012 8.43 2.68012L6 9.00012H18L15.56 2.68012L15.53 2.63012Z" />
    </Svg>
  );
};
