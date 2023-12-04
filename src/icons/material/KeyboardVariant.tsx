import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyboardVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 16H18V18H6V16ZM6 13V15H2V13H6ZM7 15V13H10V15H7ZM11 15V13H13V15H11ZM14 15V13H17V15H14ZM18 15V13H22V15H18ZM2 10H5V12H2V10ZM19 12V10H22V12H19ZM18 12H16V10H18V12ZM8 12H6V10H8V12ZM12 12H9V10H12V12ZM15 12H13V10H15V12ZM2 9V7H4V9H2ZM5 9V7H7V9H5ZM8 9V7H10V9H8ZM11 9V7H13V9H11ZM14 9V7H16V9H14ZM17 9V7H22V9H17Z" />
    </Svg>
  );
};
