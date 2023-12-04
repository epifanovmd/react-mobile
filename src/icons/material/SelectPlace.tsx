import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectPlaceIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 3H5V5H3V4C3 3.5 3.5 3 4 3ZM20 3C20.5 3 21 3.5 21 4V5H19V3H20ZM15 5V3H17V5H15ZM11 5V3H13V5H11ZM7 5V3H9V5H7ZM21 12C21 12.5 20.5 13 20 13H19V11H21V12ZM15 13V11H17V13H15ZM11 13V11H13V13H11ZM7 13V11H9V13H7ZM4 13C3.5 13 3 12.5 3 12V11H5V13H4ZM3 7H5V9H3V7ZM21 7V9H19V7H21ZM7 16L12 21L17 16H7Z" />
    </Svg>
  );
};
