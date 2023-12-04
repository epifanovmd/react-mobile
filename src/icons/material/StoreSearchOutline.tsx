import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StoreSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 4H2V2H18V4ZM13.04 10H3.04L3.64 7H16.36L16.76 9C17.5 9.04 18.21 9.19 18.89 9.46L18 5H2L1 10V12H2V18H10.5C10.17 17.2 10 16.35 10 15.5V16H4V12H10V15.5C10 13.84 10.64 12.17 11.9 10.9C12.26 10.55 12.64 10.25 13.04 10ZM23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5C12 13 14 11 16.5 11C19 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21ZM19 15.5C19 14.12 17.88 13 16.5 13C15.12 13 14 14.12 14 15.5C14 16.88 15.12 18 16.5 18C17.88 18 19 16.88 19 15.5Z" />
    </Svg>
  );
};
