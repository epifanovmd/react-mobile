import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatLineStyleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 16H8V14H3V16ZM9.5 16H14.5V14H9.5V16ZM16 16H21V14H16V16ZM3 20H5V18H3V20ZM7 20H9V18H7V20ZM11 20H13V18H11V20ZM15 20H17V18H15V20ZM19 20H21V18H19V20ZM3 12H11V10H3V12ZM13 12H21V10H13V12ZM3 4V8H21V4H3Z" />
    </Svg>
  );
};
