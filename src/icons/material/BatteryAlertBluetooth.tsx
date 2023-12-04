import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BatteryAlertBluetoothIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 2V4H3.3C2.6 4 2 4.6 2 5.3V20.6C2 21.4 2.6 22 3.3 22H12.6C13.3 22 13.9 21.4 13.9 20.7V5.3C14 4.6 13.4 4 12.7 4H11V2H5ZM19 8V11.8L16.7 9.5L16 10.2L18.8 13L16 15.8L16.7 16.5L19 14.2V18H19.5L22.4 15.1L20.2 13L22.3 10.9L19.5 8H19ZM7 8H9V14H7V8ZM20 9.9L20.9 10.8L20 11.8V9.9ZM20 14.2L20.9 15.1L20 16.1V14.2ZM7 16H9V18H7V16Z" />
    </Svg>
  );
};
