import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodDrumstickIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.1601 12.7302C22.9301 9.96017 22.5701 5.26017 19.0901 3.00017C17.0801 1.67017 14.3901 1.66017 12.3601 2.97017C10.6001 4.10017 9.63006 5.86017 9.46006 7.68017C9.33006 9.00017 8.83006 10.2302 7.91006 11.1502L7.88006 11.1802C6.72006 12.3402 6.72006 14.1102 7.81006 15.1902L8.80006 16.1802C9.89006 17.2702 11.6601 17.2702 12.7501 16.1802C13.7201 15.2102 15.0001 14.6802 16.3901 14.5302C17.7601 14.3802 19.1001 13.7802 20.1601 12.7302ZM6.26006 19.8602C6.53006 20.4202 6.44006 21.1002 5.97006 21.5602C5.39006 22.1502 4.44006 22.1502 3.85006 21.5602C3.58006 21.2902 3.44006 20.9402 3.42006 20.5802C3.06006 20.5602 2.71006 20.4202 2.44006 20.1502C1.85006 19.5602 1.85006 18.6102 2.44006 18.0302C2.90006 17.5702 3.59006 17.4702 4.14006 17.7402L6.62006 15.3102C6.76006 15.5002 6.92006 15.7202 7.10006 15.9002L8.09006 16.8902C8.30006 17.0902 8.50006 17.2602 8.76006 17.4102L6.26006 19.8602Z" />
    </Svg>
  );
};
