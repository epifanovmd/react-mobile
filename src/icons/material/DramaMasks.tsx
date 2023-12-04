import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DramaMasksIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.11 19.4504C5.94 18.6504 4.22 16.7804 3.71 14.3504L2.05 6.54037C1.81 5.46037 2.5 4.40037 3.58 4.17037L13.35 2.10037L13.38 2.09037C14.45 1.88037 15.5 2.57037 15.72 3.63037L16.07 5.30037L20.42 6.23037H20.45C21.5 6.47037 22.18 7.53037 21.96 8.59037L20.3 16.4104C19.5 20.1804 15.78 22.6004 12 21.7904C10.42 21.4604 9.08 20.6104 8.11 19.4504ZM20 8.18037L10.23 6.10037L8.57 13.9204V13.9504C8 16.6304 9.73 19.2704 12.42 19.8404C15.11 20.4104 17.77 18.6904 18.34 16.0004L20 8.18037ZM16 16.5004C15.37 17.5704 14.11 18.1604 12.83 17.8904C11.56 17.6204 10.65 16.5704 10.5 15.3404L16 16.5004ZM8.47 5.17037L4 6.13037L5.66 13.9404L5.67 13.9704C5.82 14.6804 6.12 15.3204 6.53 15.8704C6.43 15.1004 6.45 14.3004 6.62 13.5004L7.05 11.5004C6.6 11.4204 6.21 11.1704 6 10.8104C6.06 10.2004 6.56 9.66037 7.25 9.50037C7.33 9.50037 7.4 9.50037 7.5 9.50037L8.28 5.69037C8.32 5.50037 8.38 5.33037 8.47 5.17037ZM15.03 12.2304C15.35 11.7004 16.03 11.4204 16.72 11.5704C17.41 11.7104 17.91 12.2404 18 12.8604C17.67 13.3804 17 13.6604 16.3 13.5004C15.61 13.3704 15.11 12.8404 15.03 12.2304ZM10.15 11.1904C10.47 10.6604 11.14 10.3804 11.83 10.5304C12.5 10.6704 13.03 11.2104 13.11 11.8204C12.78 12.3404 12.11 12.6304 11.42 12.5004C10.73 12.3304 10.23 11.8004 10.15 11.1904ZM11.97 4.43037L13.93 4.85037L13.77 4.05037L11.97 4.43037Z" />
    </Svg>
  );
};
