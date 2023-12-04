import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WazeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.5399 6.63C21.2299 7.57 21.6899 8.67 21.8899 9.82C22.0999 11.07 21.9999 12.34 21.5799 13.54C21.1799 14.71 20.4999 15.76 19.5799 16.6C18.9099 17.24 18.1499 17.77 17.3199 18.18C17.7299 19.25 17.1899 20.45 16.1199 20.86C15.8799 20.95 15.6299 21 15.3799 21C14.2699 21 13.3499 20.11 13.3099 19C13.0499 19 10.7299 19 10.2399 19C10.1299 20.14 9.10994 21 7.96994 20.87C6.90994 20.77 6.10994 19.89 6.08994 18.83C6.09994 18.64 6.12994 18.44 6.18994 18.26C4.59994 17.73 3.20994 16.74 2.18994 15.41C1.85994 14.97 1.95994 14.34 2.41994 14C2.59994 13.86 2.81994 13.78 3.04994 13.78C3.76994 13.78 4.04994 13.53 4.21994 13.15C4.45994 12.43 4.59994 11.68 4.60994 10.92C4.63994 10.39 4.69994 9.87 4.77994 9.35C5.12994 7.62 6.09994 6.07 7.49994 5C9.15994 3.7 11.1899 3 13.2899 3C14.7199 3 16.1299 3.35 17.3999 4C18.6399 4.62 19.7099 5.5 20.5399 6.63ZM16.7199 17.31C18.4999 16.5 19.8999 15.04 20.5899 13.21C22.2099 8.27 17.9999 4.05 13.2899 4.05C12.9399 4.05 12.5799 4.07 12.2299 4.12C9.35994 4.5 6.39994 6.5 5.80994 9.5C5.42994 11.5 5.99994 14.79 3.04994 14.79C3.99994 16 5.31994 16.93 6.80994 17.37C7.65994 16.61 8.96994 16.69 9.73994 17.55C9.84994 17.67 9.93994 17.8 9.99994 17.94C10.5899 17.94 13.1999 17.94 13.5499 17.94C14.0699 16.92 15.3299 16.5 16.3499 17.04C16.4999 17.12 16.5999 17.21 16.7199 17.31ZM10.9699 10.31C10.3899 10.34 9.87994 9.9 9.84994 9.31C9.81994 8.73 10.2699 8.23 10.8499 8.19C11.4299 8.16 11.9399 8.61 11.9699 9.25C11.9999 9.8 11.5599 10.27 10.9999 10.29L10.9699 10.31ZM15.6599 10.31C15.0799 10.34 14.5699 9.9 14.5399 9.31C14.4999 8.73 14.9599 8.23 15.5399 8.19C16.1199 8.16 16.6299 8.61 16.6599 9.25C16.6799 9.8 16.2499 10.27 15.6599 10.29V10.31ZM9.70994 12.07C9.64994 11.79 9.83994 11.5 10.1199 11.45C10.3999 11.4 10.6799 11.58 10.7399 11.86C11.0899 12.97 12.1599 13.69 13.3199 13.6C14.4599 13.66 15.4999 12.96 15.8899 11.88C16.0299 11.62 16.3499 11.5 16.5999 11.65C16.7799 11.75 16.8899 11.92 16.8899 12.12C16.6999 12.83 16.2599 13.45 15.6599 13.88C14.9699 14.36 14.1599 14.63 13.3199 14.64H13.2099C11.5799 14.71 10.1099 13.64 9.67994 12.06L9.70994 12.07Z" />
    </Svg>
  );
};
