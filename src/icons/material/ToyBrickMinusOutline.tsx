import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToyBrickMinusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.09 20H3V6H5V5C5 3.9 5.9 3 7 3H9C10.11 3 11 3.9 11 5V6H13V5C13 3.9 13.9 3 15 3H17C18.11 3 19 3.9 19 5V6H21V13.35C20.37 13.13 19.7 13 19 13V8H5V18H13.09C13.04 18.33 13 18.66 13 19C13 19.34 13.04 19.67 13.09 20ZM23 18H15V20H23V18Z" />
    </Svg>
  );
};
