import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarBrakeAbsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M24 12C24 15.31 22.66 18.31 20.5 20.5L19.42 19.42C21.32 17.5 22.5 14.9 22.5 12C22.5 9.11 21.32 6.5 19.42 4.58L20.5 3.5C22.66 5.69 24 8.69 24 12ZM20 9.6V8H16.8C15.92 8 15.2 8.72 15.2 9.6V11.2C15.2 11.6243 15.3686 12.0313 15.6686 12.3314C15.9687 12.6314 16.3757 12.8 16.8 12.8H18.4V14.4H15.2V16H18.4C19.28 16 20 15.28 20 14.4V12.8C20 12.3757 19.8314 11.9687 19.5314 11.6686C19.2313 11.3686 18.8243 11.2 18.4 11.2H16.8V9.6H20ZM8.42 6C9.47 5.37 10.69 5 12 5C13.31 5 14.53 5.37 15.58 6H18.69C17.05 4.16 14.66 3 12 3C9.34 3 6.95 4.16 5.31 6H8.42ZM13.2 12C13.84 12 14.4 12.56 14.4 13.2V14.4C14.4 14.8243 14.2314 15.2313 13.9314 15.5314C13.6313 15.8314 13.2243 16 12.8 16H9.6V8H12.8C13.2243 8 13.6313 8.16857 13.9314 8.46863C14.2314 8.76869 14.4 9.17565 14.4 9.6V10.8C14.4 11.44 13.84 12 13.2 12ZM12.8 12.8H11.2V14.4H12.8V12.8ZM12.8 9.6H11.2V11.2H12.8V9.6ZM4.58 4.58L3.5 3.5C1.34 5.69 0 8.69 0 12C0 15.31 1.34 18.31 3.5 20.5L4.58 19.42C2.68 17.5 1.5 14.9 1.5 12C1.5 9.11 2.68 6.5 4.58 4.58ZM7.2 16V12.8H5.6V16H4V9.6C4 9.17565 4.16857 8.76869 4.46863 8.46863C4.76869 8.16857 5.17565 8 5.6 8H7.2C8.08 8 8.8 8.72 8.8 9.6V16H7.2ZM7.2 11.2V9.6H5.6V11.2H7.2ZM15.58 18C14.53 18.63 13.31 19 12 19C10.69 19 9.47 18.63 8.42 18H5.31C6.95 19.84 9.34 21 12 21C14.66 21 17.05 19.84 18.69 18H15.58Z" />
    </Svg>
  );
};
