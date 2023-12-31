import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageJavaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 6.08C16.5 6.08 9.66004 7.79 12.94 11.56C13.91 12.67 12.69 13.67 12.69 13.67C12.69 13.67 15.14 12.42 14 10.82C12.94 9.35 12.14 8.62 16.5 6.08ZM12.03 7.28C16.08 4.08 14 2 14 2C14.84 5.3 11.04 6.3 9.67004 8.36C8.73004 9.76 10.13 11.27 12 13C11.29 11.3 8.78004 9.84 12.03 7.28ZM9.37004 17.47C6.29004 18.33 11.25 20.1 15.16 18.43C14.78 18.28 14.41 18.1 14.06 17.89C12.7 18.2 11.3 18.26 9.92004 18.07C8.61004 17.91 9.37004 17.47 9.37004 17.47ZM14.69 15.79C12.94 16.17 11.13 16.26 9.35004 16.05C8.04004 15.92 8.90004 15.28 8.90004 15.28C5.50004 16.41 10.78 17.68 15.5 16.3C15.21 16.19 14.93 16 14.69 15.79ZM18.11 19.09C18.11 19.09 18.68 19.56 17.5 19.92C15.22 20.6 8.07004 20.81 6.09004 19.95C5.38004 19.64 6.72004 19.21 7.14004 19.12C7.37004 19.06 7.60004 19.04 7.83004 19.04C7.04004 18.5 2.70004 20.14 5.64004 20.6C13.61 21.9 20.18 20 18.11 19.09ZM15.37 14.23C15.66 14.04 15.97 13.88 16.29 13.74C16.29 13.74 14.78 14 13.27 14.14C11.67 14.3 10.06 14.32 8.46004 14.2C6.11004 13.89 9.75004 13 9.75004 13C8.65004 13 7.57004 13.26 6.59004 13.75C4.54004 14.75 11.69 15.2 15.37 14.23ZM16.27 16.65C16.25 16.69 16.23 16.72 16.19 16.75C21.2 15.44 19.36 12.11 16.96 12.94C16.83 13 16.72 13.08 16.65 13.19C16.79 13.14 16.93 13.1 17.08 13.07C18.28 12.83 20 14.7 16.27 16.65ZM16.4 21.26C13.39 21.78 10.31 21.82 7.28004 21.4C7.28004 21.4 7.74004 21.78 10.09 21.93C13.69 22.16 19.22 21.8 19.35 20.1C19.38 20.11 19.12 20.75 16.4 21.26Z" />
    </Svg>
  );
};
