import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectRemoveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 20C21 20.55 20.55 21 20 21H19V19H21V20ZM15 21V19H17V21H15ZM11 21V19H13V21H11ZM7 21V19H9V21H7ZM4 21C3.45 21 3 20.55 3 20V19H5V21H4ZM3 15H5V17H3V15ZM21 15V17H19V15H21ZM14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8ZM3 11H5V13H3V11ZM21 11V13H19V11H21ZM3 7H5V9H3V7ZM21 7V9H19V7H21ZM4 3H5V5H3V4C3 3.45 3.45 3 4 3ZM20 3C20.55 3 21 3.45 21 4V5H19V3H20ZM15 5V3H17V5H15ZM11 5V3H13V5H11ZM7 5V3H9V5H7Z" />
    </Svg>
  );
};
