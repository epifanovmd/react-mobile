import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanWhiteCaneIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 4C8 2.9 8.9 2 10 2C11.11 2 12 2.9 12 4C12 5.11 11.11 6 10 6C8.9 6 8 5.11 8 4ZM20.65 21.5L14.5 10.85C13.77 10.85 13.23 10.65 12.64 10.26C12.04 9.87 11.6 9.38 11.31 8.8L10.57 7.23C10.39 6.88 10.15 6.62 9.83 6.44C9.54 6.27 9.23 6.18 8.91 6.18C8.59 6.18 8.29 6.26 8 6.4L3 9.23V13.63H4.86V10.32L6.25 9.54L5.91 11.11C5.82 11.63 5.77 12.15 5.77 12.68V17.64L3.38 20.87L4.86 22L7.65 18.25L7.82 15L9.5 17.34V22H11.35V15.94L9.5 13.33V12.68C9.5 12.24 9.5 11.81 9.61 11.39L9.96 10.19C10.34 10.74 10.81 11.2 11.35 11.63C12.2 12.31 13 12.59 14.35 12.58L19.78 22L20.65 21.5Z" />
    </Svg>
  );
};
