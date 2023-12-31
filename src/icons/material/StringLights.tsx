import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StringLightsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.5601 11.39C22.3601 10.59 21.8201 9.85 21.0501 9.44L20.6301 7.74C21.1101 7.58 21.5701 7.41 22.0001 7.23V5C20.0001 6.07 16.5301 7.03 12.0001 7.03C7.47007 7.03 4.00007 6.07 2.00007 5V7.23C2.43007 7.41 2.89007 7.58 3.37007 7.74L2.95007 9.44C2.18007 9.85 1.64007 10.59 1.44007 11.39C0.90507 13.57 0.38507 17.31 2.92007 17.93C4.00007 18.2 6.00007 17.89 7.27007 12.82C7.46007 12 7.33007 11.12 6.84007 10.39L7.26007 8.67C8.14007 8.81 9.05007 8.9 10.0001 8.96V10.74C9.35007 11.33 9.00007 12.17 9.00007 13C9.00007 15.24 9.39007 19 12.0001 19C13.1201 19 15.0001 18.22 15.0001 13C15.0001 12.17 14.6501 11.33 14.0001 10.74V8.96C14.9501 8.9 15.8601 8.81 16.7401 8.67L17.1601 10.39C16.6701 11.12 16.5401 12 16.7301 12.82C18.0001 17.89 20.0001 18.2 21.0801 17.93C23.6101 17.31 23.0901 13.57 22.5601 11.39ZM5.81007 12.47C5.81007 12.47 4.74007 16.84 3.28007 16.5C1.82007 16.12 2.90007 11.75 2.90007 11.75C2.90007 11.75 3.26007 10.29 4.71007 10.65C6.16007 11.01 5.81007 12.47 5.81007 12.47ZM12.0001 17.5C10.5001 17.5 10.5001 13 10.5001 13C10.5001 13 10.5001 11.5 12.0001 11.5C13.5001 11.5 13.5001 13 13.5001 13C13.5001 13 13.5001 17.5 12.0001 17.5ZM20.7201 16.5C19.2701 16.84 18.1901 12.47 18.1901 12.47C18.1901 12.47 17.8301 11 19.2901 10.65C20.7501 10.3 21.1001 11.75 21.1001 11.75C21.1001 11.75 22.1801 16.12 20.7201 16.5Z" />
    </Svg>
  );
};
