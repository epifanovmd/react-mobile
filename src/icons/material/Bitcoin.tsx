import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BitcoinIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.24 10.5602C13.93 11.8002 12 11.1702 11.4 11.0002L11.95 8.82016C12.57 9.00016 14.56 9.26016 14.24 10.5602ZM11.13 12.1202L10.53 14.5302C11.27 14.7202 13.56 15.4502 13.9 14.0902C14.26 12.6702 11.87 12.3002 11.13 12.1202ZM21.7 14.4202C20.36 19.7802 14.94 23.0402 9.58 21.7002C4.22 20.3602 0.963001 14.9402 2.3 9.58016C3.64 4.22016 9.06 0.964162 14.42 2.30016C19.77 3.64016 23.03 9.06016 21.7 14.4202ZM14.21 8.05016L14.66 6.25016L13.56 6.00016L13.12 7.73016C12.83 7.66016 12.54 7.59016 12.24 7.53016L12.68 5.76016L11.59 5.50016L11.14 7.29016C10.9 7.23016 10.66 7.18016 10.44 7.12016L8.93 6.74016L8.63 7.91016C8.63 7.91016 9.45 8.10016 9.43 8.11016C9.88 8.22016 9.96 8.50016 9.94 8.75016L8.71 13.6802C8.66 13.8202 8.5 14.0002 8.21 13.9502C8.22 13.9602 7.41 13.7502 7.41 13.7502L6.87 15.0002L8.29 15.3602C8.56 15.4302 8.82 15.5002 9.08 15.5602L8.62 17.3802L9.72 17.6602L10.17 15.8502C10.47 15.9302 10.76 16.0002 11.04 16.0802L10.59 17.8702L11.69 18.1502L12.15 16.3302C14 16.6802 15.42 16.5402 16 14.8502C16.5 13.5002 16 12.7002 15 12.1902C15.72 12.0002 16.26 11.5502 16.41 10.5702C16.61 9.24016 15.59 8.53016 14.21 8.05016Z" />
    </Svg>
  );
};
