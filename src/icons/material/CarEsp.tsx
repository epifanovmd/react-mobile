import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarEspIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.31 6C6.95 4.16 9.34 3 12 3C14.66 3 17.05 4.16 18.69 6H15.58C14.53 5.37 13.31 5 12 5C10.69 5 9.47 5.37 8.42 6H5.31ZM14.4 9.6V8H11.2C10.7757 8 10.3687 8.16857 10.0686 8.46863C9.76857 8.76869 9.6 9.17565 9.6 9.6V11.2C9.6 12.08 10.32 12.8 11.2 12.8H12.8V14.4H9.6V16H12.8C13.2243 16 13.6313 15.8314 13.9314 15.5314C14.2314 15.2313 14.4 14.8243 14.4 14.4V12.8C14.4 11.92 13.68 11.2 12.8 11.2H11.2V9.6H14.4ZM18.4 8H15.2V16H16.8V12.8H18.4C18.8243 12.8 19.2313 12.6314 19.5314 12.3314C19.8314 12.0313 20 11.6243 20 11.2V9.6C20 8.72 19.28 8 18.4 8ZM18.4 11.2H16.8V9.6H18.4V11.2ZM8.8 9.6V8H4V16H8.8V14.4H5.6V12.8H8.8V11.2H5.6V9.6H8.8ZM15.58 18C14.53 18.63 13.31 19 12 19C10.69 19 9.47 18.63 8.42 18H5.31C6.95 19.84 9.34 21 12 21C14.66 21 17.05 19.84 18.69 18H15.58ZM20.5 3.5L19.42 4.58C21.32 6.5 22.5 9.11 22.5 12C22.5 14.9 21.32 17.5 19.42 19.42L20.5 20.5C22.66 18.31 24 15.31 24 12C24 8.69 22.66 5.69 20.5 3.5ZM4.58 4.58L3.5 3.5C1.34 5.69 0 8.69 0 12C0 15.31 1.34 18.31 3.5 20.5L4.58 19.42C2.68 17.5 1.5 14.9 1.5 12C1.5 9.11 2.68 6.5 4.58 4.58Z" />
    </Svg>
  );
};
