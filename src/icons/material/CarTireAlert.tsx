import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarTireAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 13H13V15H11V13ZM11 5H13V11H11V5ZM17 4.76C18.86 6.19 20 8.61 20 11C20 14 18.33 16.64 15.86 18H8.14C5.67 16.64 4 14 4 11C4 8.61 5.09 6.17 7 4.76V2H5V3.86C3.15 5.68 2 8.2 2 11C2 13.8 3.15 16.32 5 18.14V22H7V20H9V22H11V20H13V22H15V20H17V22H19V18.14C20.85 16.32 22 13.8 22 11C22 8.2 20.85 5.68 19 3.86V2H17V4.76Z" />
    </Svg>
  );
};
