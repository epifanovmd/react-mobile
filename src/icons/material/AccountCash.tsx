import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountCashIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 8C11 10.21 9.21 12 7 12C4.79 12 3 10.21 3 8C3 5.79 4.79 4 7 4C9.21 4 11 5.79 11 8ZM11 14.72V20H0V18C0 15.79 3.13 14 7 14C8.5 14 9.87 14.27 11 14.72ZM24 20H13V3H24V20ZM16 11.5C16 10.12 17.12 9 18.5 9C19.88 9 21 10.12 21 11.5C21 12.88 19.88 14 18.5 14C17.12 14 16 12.88 16 11.5ZM22 7C20.9 7 20 6.11 20 5H17C17 6.11 16.11 7 15 7V16C16.11 16 17 16.9 17 18H20C20 16.9 20.9 16 22 16V7Z" />
    </Svg>
  );
};
