import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EvernoteIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.0899 11.63C15.0899 11.63 15.2799 10.35 15.9999 10.35C16.7599 10.35 17.7799 12.06 17.7799 12.06C17.7799 12.06 15.4599 11.63 15.0899 11.63ZM18.9999 4.69C18.6399 4.09 16.8299 3.41 15.8899 3.41C14.9599 3.41 13.4999 3.41 13.4999 3.41C13.4999 3.41 12.6999 2 10.8799 2C9.04994 2 9.16994 2.81 9.16994 3.5V6.32L8.33994 7.19H4.49994C4.49994 7.19 3.43994 7.91 3.43994 9.44C3.43994 11 3.91994 16.35 7.12994 16.85C10.9299 17.43 11.5799 15.67 11.5799 15.46C11.5799 14.56 11.5999 13.21 11.5999 13.21C11.5999 13.21 12.7099 15.33 14.3899 15.33C16.0699 15.33 17.0399 16.3 17.0399 17.29C17.0399 18.28 17.0399 19.13 17.0399 19.13C17.0399 19.13 16.9999 20.28 15.9999 20.28C14.9999 20.28 13.8899 20.28 13.8899 20.28C13.8899 20.28 13.1999 19.74 13.1999 19C13.1999 18.25 13.5299 18.05 13.9299 18.05C14.3199 18.05 14.6499 18.09 14.6499 18.09V16.53C14.6499 16.53 11.4699 16.5 11.4699 18.94C11.4699 21.37 13.1299 22 14.4599 22C15.7999 22 16.6299 22 16.6299 22C16.6299 22 20.5599 21.5 20.5599 13.75C20.5599 6 19.3299 5.28 18.9999 4.69ZM7.49994 6.31H4.25994L8.31994 2.22V5.5L7.49994 6.31Z" />
    </Svg>
  );
};
