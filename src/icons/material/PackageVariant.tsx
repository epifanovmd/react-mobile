import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PackageVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.00012 10.96C1.50012 10.68 1.35012 10.07 1.63012 9.59L3.13012 7C3.24012 6.8 3.41012 6.66 3.60012 6.58L11.4301 2.18C11.5901 2.06 11.7901 2 12.0001 2C12.2101 2 12.4101 2.06 12.5701 2.18L20.4701 6.62C20.6601 6.72 20.8201 6.88 20.9101 7.08L22.3601 9.6C22.6401 10.08 22.4701 10.69 22.0001 10.96L21.0001 11.54V16.5C21.0001 16.88 20.7901 17.21 20.4701 17.38L12.5701 21.82C12.4101 21.94 12.2101 22 12.0001 22C11.7901 22 11.5901 21.94 11.4301 21.82L3.53012 17.38C3.21012 17.21 3.00012 16.88 3.00012 16.5V10.96C2.70012 11.13 2.32012 11.14 2.00012 10.96ZM12.0001 4.15V10.85L17.9601 7.5L12.0001 4.15ZM5.00012 15.91L11.0001 19.29V12.58L5.00012 9.21V15.91ZM19.0001 15.91V12.69L14.0001 15.59C13.6701 15.77 13.3001 15.76 13.0001 15.6V19.29L19.0001 15.91ZM13.8501 13.36L20.1301 9.73L19.5501 8.72L13.2701 12.35L13.8501 13.36Z" />
    </Svg>
  );
};
