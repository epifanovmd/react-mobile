import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatLetterCaseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.0599 18C19.9999 17.83 19.9099 17.54 19.8599 17.11C19.1899 17.81 18.3799 18.16 17.4499 18.16C16.6199 18.16 15.9299 17.92 15.3999 17.45C14.8699 17 14.5999 16.39 14.5999 15.66C14.5999 14.78 14.9299 14.1 15.5999 13.61C16.2699 13.12 17.2099 12.88 18.4299 12.88H19.8299V12.24C19.8299 11.75 19.6799 11.36 19.3799 11.07C19.0799 10.78 18.6299 10.64 18.0499 10.64C17.5299 10.64 17.0999 10.76 16.7499 11C16.3999 11.25 16.2299 11.54 16.2299 11.89H14.7699C14.7699 11.46 14.9199 11.05 15.2199 10.65C15.4999 10.25 15.9299 9.94 16.4399 9.71C16.9499 9.5 17.4999 9.36 18.1299 9.36C19.1099 9.36 19.8699 9.6 20.4199 10.09C20.9699 10.58 21.2599 11.25 21.2799 12.11V16C21.2799 16.8 21.3799 17.42 21.5799 17.88V18H20.0599ZM17.6599 16.88C18.1099 16.88 18.5399 16.77 18.9499 16.56C19.3499 16.35 19.6499 16.07 19.8299 15.73V14.16H18.6999C16.9299 14.16 16.0399 14.63 16.0399 15.57C16.0399 16 16.1899 16.3 16.4999 16.53C16.7999 16.76 17.1799 16.88 17.6599 16.88ZM5.45993 13.71H9.52993L7.49993 8.29L5.45993 13.71ZM6.63993 6H8.35993L13.0699 18H11.1399L10.1699 15.43H4.81993L3.85993 18H1.92993L6.63993 6Z" />
    </Svg>
  );
};
