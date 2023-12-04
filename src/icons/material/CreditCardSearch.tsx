import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardSearchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.82 11C9.4 13.5 9.4 17.5 11.82 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H20C21.11 4 22 4.89 22 6V12.06C21.74 11.65 21.45 11.26 21.1 10.9C20.76 10.57 20.39 10.27 20 10.03V8H4V11H11.82ZM23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5C12 13 14 11 16.5 11C19 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21ZM19 15.5C19 14.12 17.88 13 16.5 13C15.12 13 14 14.12 14 15.5C14 16.88 15.12 18 16.5 18C17.88 18 19 16.88 19 15.5Z" />
    </Svg>
  );
};
