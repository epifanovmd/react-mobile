import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DataMatrixEditIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 12.1C19.9 12.1 19.7 12.2 19.6 12.3L18.6 13.3L20.7 15.4L21.7 14.4C21.9 14.2 21.9 13.8 21.7 13.6L20.4 12.3C20.3 12.2 20.2 12.1 20 12.1ZM18.1 13.9L12 19.9V22H14.1L20.2 15.9L18.1 13.9ZM8 6H6V2H8V6ZM10 16H8V14H10V16ZM12 6H10V2H12V6ZM16 2V4H14V2H16ZM20 4H18V2H20V4ZM10 20V18H8V16H6V14H4V12H6V6H4V2H2V22H10V20ZM6 20H4V18H6V20ZM22 10H18V8H22V10ZM20 6V4H22V6H20ZM18 4V8H14V6H16V4H18ZM10 18V16H12V12H8V8H12V10H14V12H16V10H18V11.1L15.1 14H14V15.1L11.1 18H10Z" />
    </Svg>
  );
};
