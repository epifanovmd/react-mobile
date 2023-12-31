import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AmmunitionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 22H10V21H14V22ZM13 10V7H11V10L10 11.5V20H14V11.5L13 10ZM12 2C12 2 11 3 11 5V6H13V5C13 5 13 3 12 2ZM8 22H4V21H8V22ZM7 10V7H5V10L4 11.5V20H8V11.5L7 10ZM6 2C6 2 5 3 5 5V6H7V5C7 5 7 3 6 2ZM20 22H16V21H20V22ZM19 10V7H17V10L16 11.5V20H20V11.5L19 10ZM18 2C18 2 17 3 17 5V6H19V5C19 5 19 3 18 2Z" />
    </Svg>
  );
};
