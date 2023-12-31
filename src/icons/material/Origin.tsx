import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OriginIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2.12954C12 2.22954 11.95 2.32954 11.89 2.40954C11.5 2.99954 11.16 3.63954 11.04 4.32954L11 4.55954L12 4.49954C13.9891 4.49954 15.8968 5.28972 17.3033 6.69624C18.7098 8.10277 19.5 10.0104 19.5 11.9995C19.5 13.6195 19 15.1095 18.12 16.3395C16.73 18.6795 14.72 20.6495 12.34 21.9695C12.25 21.9995 12.12 21.9995 12.06 21.9295C12 21.8295 12 21.6995 12.09 21.6095C12.47 21.0895 12.73 20.4995 12.87 19.8495L12.93 19.4395L12 19.4995C10.0109 19.4995 8.10322 18.7094 6.6967 17.3028C5.29018 15.8963 4.5 13.9887 4.5 11.9995C4.5 10.3895 5 8.88954 5.88 7.66954C7.26 5.31954 9.28 3.33954 11.67 1.99954C11.78 1.94954 11.94 1.99954 12 2.12954ZM12 8.99954C11.2044 8.99954 10.4413 9.31561 9.87868 9.87822C9.31607 10.4408 9 11.2039 9 11.9995C9 12.7952 9.31607 13.5583 9.87868 14.1209C10.4413 14.6835 11.2044 14.9995 12 14.9995C12.7956 14.9995 13.5587 14.6835 14.1213 14.1209C14.6839 13.5583 15 12.7952 15 11.9995C15 11.2039 14.6839 10.4408 14.1213 9.87822C13.5587 9.31561 12.7956 8.99954 12 8.99954Z" />
    </Svg>
  );
};
