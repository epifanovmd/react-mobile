import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PuzzleEditOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.04 12.13C20.9 12.13 20.76 12.19 20.65 12.3L19.65 13.3L21.7 15.35L22.7 14.35C22.92 14.14 22.92 13.79 22.7 13.58L21.42 12.3C21.31 12.19 21.18 12.13 21.04 12.13ZM19.07 13.88L13 19.94V22H15.06L21.12 15.93L19.07 13.88ZM11.05 19.06C10.87 19 10.69 19 10.5 19C9 19 7.8 20.21 7.8 21.7V22H4C2.9 22 2 21.11 2 20V16.2H2.3C3.79 16.2 5 15 5 13.5C5 12 3.79 10.8 2.3 10.8H2V7C2 5.9 2.9 5 4 5H7.04C7.28 3.3 8.74 2 10.5 2C12.26 2 13.72 3.3 13.96 5H17C18.11 5 19 5.9 19 7V10.04C19.36 10.09 19.69 10.21 20 10.36C19.73 10.5 19.46 10.66 19.24 10.89L18.12 12H17V7H12V5.5C12 4.67 11.33 4 10.5 4C9.67 4 9 4.67 9 5.5V7H4V9.12C5.76 9.8 7 11.5 7 13.5C7 15.5 5.75 17.2 4 17.88V20H6.12C6.8 18.25 8.5 17 10.5 17C11.26 17 12 17.18 12.61 17.5L11.05 19.06Z" />
    </Svg>
  );
};
