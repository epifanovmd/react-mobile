import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ButterflyOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 21H11V6L9.03 3.97L10 3L12 5L14 3L15 4L13 6V21ZM14 9V7C14.84 6.37 15.88 6 17 6C19.76 6 22 8.24 22 11C22 12.64 21.21 14.09 20 15V17C20 19.21 18.21 21 16 21C15.27 21 14.59 20.81 14 20.46V18.46C14.59 18.81 15.27 19 16 19C17.1 19 18 18.1 18 17V13.83C19.17 13.42 20 12.31 20 11C20 9.35 18.67 8 17 8C15.88 8 14.84 8.37 14 9ZM10 9C9.16 8.37 8.13 8 7 8C5.33 8 4 9.35 4 11C4 12.31 4.84 13.42 6 13.83V17C6 18.1 6.9 19 8 19C8.73 19 9.41 18.81 10 18.46V20.46C9.41 20.81 8.73 21 8 21C5.79 21 4 19.21 4 17V15C2.79 14.09 2 12.64 2 11C2 8.24 4.24 6 7 6C8.13 6 9.16 6.37 10 7V9ZM9 11L7.5 9.5L6 11L7.5 12.5L9 11ZM18 11L16.5 9.5L15 11L16.5 12.5L18 11Z" />
    </Svg>
  );
};
