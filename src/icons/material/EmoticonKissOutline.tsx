import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonKissOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 9.5C9 10.3 8.3 11 7.5 11C6.7 11 6 10.3 6 9.5C6 8.7 6.7 8 7.5 8C8.3 8 9 8.7 9 9.5ZM16 9.5C16 10.3 15.3 11 14.5 11C13.7 11 13 10.3 13 9.5C13 8.7 13.7 8 14.5 8C15.3 8 16 8.7 16 9.5ZM14 14.12L11.88 12L10.82 13.06L11.88 14.12L10.82 15.18L11.88 16.24L10.82 17.3L11.88 18.36L14 16.24L12.94 15.18L14 14.12ZM16.85 13C16.5808 13 16.3142 13.053 16.0655 13.156C15.8168 13.2591 15.5908 13.4101 15.4004 13.6004C15.2101 13.7908 15.0591 14.0168 14.956 14.2655C14.853 14.5142 14.8 14.7808 14.8 15.05C14.8 15.62 15.03 16.12 15.4 16.5L18.9 20L22.4 16.5C22.77 16.13 23 15.61 23 15.05C23 14.7808 22.947 14.5142 22.844 14.2655C22.7409 14.0168 22.5899 13.7908 22.3996 13.6004C22.2092 13.4101 21.9832 13.2591 21.7345 13.156C21.4858 13.053 21.2192 13 20.95 13C20.4 13 19.87 13.23 19.5 13.6L18.9 14.2L18.3 13.61C17.93 13.23 17.4 13 16.85 13ZM15 18.92C13.82 19.6 12.46 20 11 20C8.87827 20 6.84344 19.1571 5.34315 17.6569C3.84285 16.1566 3 14.1217 3 12C3 9.87827 3.84285 7.84344 5.34315 6.34315C6.84344 4.84285 8.87827 4 11 4C15.26 4 18.73 7.33 19 11.5C19.58 11.19 20.26 11 20.95 11C20.45 5.95 16.18 2 11 2C8.34784 2 5.8043 3.05357 3.92893 4.92893C2.05357 6.8043 1 9.34784 1 12C1 14.6522 2.05357 17.1957 3.92893 19.0711C5.8043 20.9464 8.34784 22 11 22C13 22 14.88 21.4 16.45 20.38L15 18.92Z" />
    </Svg>
  );
};
