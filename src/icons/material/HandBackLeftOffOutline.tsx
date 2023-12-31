import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandBackLeftOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.46L2.38999 1.73L1.10999 3L3.55999 5.45C3.20999 5.87 2.99999 6.41 2.99999 7V16C2.99999 20.42 6.57999 24 11 24C13.94 24 16.62 22.45 18.12 20L20.84 22.73L22.11 21.46ZM11 22C7.68999 22 4.99999 19.31 4.99999 16V7C4.99999 6.97 4.99999 6.94 4.99999 6.91L5.99999 7.89V12H7.99999V9.89L8.99999 10.89V12H10.11L16.65 18.54C15.57 20.64 13.41 22 11 22ZM7.99999 4.8L6.20999 3C6.58999 2.12 7.46999 1.5 8.49999 1.5C8.72999 1.5 8.95999 1.53 9.16999 1.59C9.53999 0.66 10.44 0 11.5 0C12.73 0 13.75 0.89 13.96 2.06C14.13 2 14.31 2 14.5 2C15.88 2 17 3.12 17 4.5V10.39C17.34 10.08 17.76 9.85 18.22 9.73L19 9.5C19.82 9.29 20.69 9.61 21.18 10.35C21.56 10.92 21.58 11.66 21.33 12.3L19.67 16.47L18.13 14.93L19.5 11.45L19 11.59C18.5 11.71 18.15 12.05 18 12.5L17.34 14.14L15 11.8V4.5C15 4.22 14.78 4 14.5 4C14.22 4 14 4.22 14 4.5V10.8L12 8.8V2.5C12 2.22 11.78 2 11.5 2C11.22 2 11 2.22 11 2.5V7.8L8.99999 5.8V4C8.99999 3.72 8.77999 3.5 8.49999 3.5C8.21999 3.5 7.99999 3.72 7.99999 4V4.8Z" />
    </Svg>
  );
};
