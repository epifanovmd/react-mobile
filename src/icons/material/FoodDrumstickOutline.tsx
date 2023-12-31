import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodDrumstickOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.7101 4C16.5401 4 17.3301 4.22 18.0001 4.66C19.1401 5.4 19.8401 6.53 20.0001 7.84C20.1101 9.13 19.6601 10.4 18.7501 11.31C18.0501 12 17.1601 12.44 16.1801 12.54C14.2701 12.74 12.5901 13.5 11.3401 14.77C11.1301 14.97 10.9001 15 10.7701 15C10.6501 15 10.4201 14.97 10.2101 14.77L9.22006 13.78C9.04006 13.6 9.00006 13.39 9.00006 13.25C9.00006 13 9.11006 12.78 9.32006 12.57C10.5301 11.35 11.2701 9.73 11.4501 7.87C11.5801 6.54 12.2901 5.4 13.4501 4.65C14.1101 4.22 14.8901 4 15.7101 4ZM15.7101 2C14.5401 2 13.3701 2.32 12.3601 2.97C10.6001 4.1 9.63006 5.86 9.46006 7.68C9.33006 9 8.83006 10.23 7.91006 11.15L7.88006 11.18C6.72006 12.34 6.72006 14.11 7.81006 15.19L8.80006 16.18C9.35006 16.73 10.0601 17 10.7701 17C11.4801 17 12.2001 16.73 12.7501 16.18C13.7201 15.21 15.0001 14.68 16.3901 14.53C17.7601 14.38 19.1001 13.78 20.1601 12.73C22.9301 9.96 22.5701 5.26 19.0901 3C18.0801 2.33 16.9001 2 15.7101 2ZM6.26006 19.86C6.53006 20.42 6.44006 21.1 5.97006 21.56C5.39006 22.15 4.44006 22.15 3.85006 21.56C3.58006 21.29 3.44006 20.94 3.42006 20.58C3.06006 20.56 2.71006 20.42 2.44006 20.15C1.85006 19.56 1.85006 18.61 2.44006 18.03C2.90006 17.57 3.59006 17.47 4.14006 17.74L6.62006 15.31C6.76006 15.5 6.92006 15.72 7.10006 15.9L8.09006 16.89C8.30006 17.09 8.50006 17.26 8.76006 17.41L6.26006 19.86Z" />
    </Svg>
  );
};
