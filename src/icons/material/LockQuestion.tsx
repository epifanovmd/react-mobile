import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LockQuestionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 1C10.6739 1 9.40215 1.52678 8.46447 2.46447C7.52678 3.40215 7 4.67392 7 6V8H6C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H17V6C17 5.34339 16.8707 4.69321 16.6194 4.08658C16.3681 3.47995 15.9998 2.92876 15.5355 2.46447C15.0712 2.00017 14.52 1.63188 13.9134 1.3806C13.3068 1.12933 12.6566 1 12 1ZM12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H8.9V6C8.9 4.29 10.29 2.9 12 2.9ZM12.19 10.5C13.13 10.5 13.88 10.71 14.42 11.12C14.96 11.54 15.23 12.1 15.23 12.8C15.23 13.24 15.08 13.63 14.79 14C14.5 14.36 14.12 14.64 13.66 14.85C13.4 15 13.23 15.15 13.14 15.32C13.05 15.5 13 15.72 13 16H11C11 15.5 11.1 15.16 11.29 14.92C11.5 14.68 11.84 14.4 12.36 14.08C12.62 13.94 12.83 13.76 13 13.54C13.14 13.33 13.22 13.08 13.22 12.8C13.22 12.5 13.13 12.28 12.95 12.11C12.77 11.93 12.5 11.85 12.19 11.85C11.92 11.85 11.7 11.92 11.5 12.06C11.34 12.2 11.24 12.41 11.24 12.69H9.27C9.22 12 9.5 11.4 10.05 11.04C10.59 10.68 11.3 10.5 12.19 10.5ZM11 17H13V19H11V17Z" />
    </Svg>
  );
};
