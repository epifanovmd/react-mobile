import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SprinklerFireIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 21V23H7V21H5ZM11 21H9V23H11V21ZM7 18V20H9V18H7ZM11 15V17H9V15H11ZM15 21H13V23H15V21ZM11 18V20H13V18H11ZM15 15V17H13V15H15ZM19 21H17V23H19V21ZM15 18V20H17V18H15ZM16 11V13H8V11H11V5H13V11H16ZM21 1V3H18V6L14 10V7.2L16 5.2V3H8V5.2L10 7.2V10L6 6V3H3V1H21Z" />
    </Svg>
  );
};
