import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AxisXRotateCounterclockwiseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 14L16.0001 10L20.0001 14H16.9001C16.4401 18.56 14.4201 22 12.0001 22C10.1201 22 8.47011 19.92 7.62011 16.84L9.37011 15.83C9.87011 18.31 10.8601 20 12.0001 20C13.4001 20 14.5701 17.45 14.9101 14H12.0001ZM1.11011 17.13L13.8901 9.75L13.9601 10.54L10.5001 14H10.5401L2.11011 18.87L1.11011 17.13ZM21.8901 5.13L22.8901 6.87L17.8801 9.76C17.7901 9.03 17.6701 8.33 17.5001 7.66L21.8901 5.13ZM12.0001 2C14.3001 2 16.2301 5.1 16.8201 9.32L16.0001 8.5L14.8701 9.63C14.5001 6.37 13.3501 4 12.0001 4C10.4201 4 9.12011 7.27 9.00011 11.42L7.00011 12.57V12C7.00011 6.5 9.24011 2 12.0001 2Z" />
    </Svg>
  );
};
