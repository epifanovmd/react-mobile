import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandClapIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.89994 21.4695C5.99994 19.8095 5.34994 17.1695 6.17994 14.8395L8.30994 8.90951C8.52994 8.29951 9.35994 8.21951 9.68994 8.77951L9.99994 9.32951C10.2399 9.71951 10.2899 10.1995 10.1399 10.6295L9.15994 13.3695L9.58994 13.7495L15.5499 6.99951C15.8999 6.59951 16.4999 6.55951 16.9099 6.90951C17.2999 7.25951 17.3399 7.86951 16.9999 8.25951L12.5499 13.2895L13.1299 13.7995L18.5799 7.61951C18.9299 7.21951 19.5399 7.17951 19.9299 7.52951C20.3299 7.87951 20.3699 8.49951 19.9999 8.88951L14.5599 15.0695L15.1399 15.5795L19.8299 10.2595C20.1799 9.85951 20.7899 9.81951 21.1799 10.1695C21.5699 10.5195 21.6199 11.1295 21.2699 11.4995L16.5799 16.8395L17.1499 17.3495L20.3199 13.7595C20.6699 13.3595 21.2799 13.3195 21.6799 13.6695C22.0799 14.0195 22.1099 14.6295 21.7599 14.9995L16.5599 20.9195C14.3199 23.4695 10.4399 23.7095 7.89994 21.4695ZM11.5899 9.21951L14.4299 5.99951C14.6699 5.72951 14.9699 5.49951 15.2999 5.36951L15.6799 4.58951C15.9199 4.11951 15.7199 3.53951 15.2399 3.30951C14.7699 3.07951 14.1899 3.27951 13.9599 3.74951L11.4499 8.88951C11.4999 8.99951 11.5599 9.10951 11.5899 9.21951ZM10.9999 7.99951V8.04951L13.7799 2.37951C13.9999 1.89951 13.8099 1.32951 13.3299 1.09951C12.8599 0.864507 12.2799 1.05951 12.0499 1.53951L9.40994 6.94951C10.0599 7.05951 10.6299 7.42951 10.9999 7.99951ZM4.76994 14.3295L6.89994 8.39951C7.16994 7.64951 7.79994 7.13951 8.54994 6.96951L10.6899 2.57951C10.9199 2.09951 10.7199 1.52951 10.2499 1.29951C9.76994 1.06951 9.19994 1.25951 8.96994 1.73951L4.99994 9.83951L4.49994 9.58951L4.70994 6.67951C4.74994 6.22951 4.56994 5.77951 4.24994 5.45951L3.78994 4.99951C3.31994 4.56951 2.54994 4.85951 2.49994 5.49951L1.99994 11.7895C1.86994 13.8295 2.76994 15.7795 4.34994 16.9995C4.32994 16.1195 4.45994 15.2095 4.76994 14.3295Z" />
    </Svg>
  );
};
