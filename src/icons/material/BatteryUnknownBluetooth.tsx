import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BatteryUnknownBluetoothIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 2V4H3.33C2.97726 4 2.63897 4.14012 2.38955 4.38955C2.14012 4.63897 2 4.97726 2 5.33V20.66C2 21.4 2.6 22 3.33 22H12.67C13.4 22 14 21.4 14 20.66V5.33C14 4.59 13.4 4 12.67 4H11V2H5ZM8 6C9.06087 6 10.0783 6.42143 10.8284 7.17157C11.5786 7.92172 12 8.93913 12 10C12 10.88 11.64 11.68 11.07 12.25L10.17 13.17C9.63 13.71 9.25 14.18 9.09 15H7.05C7.16 14.1 7.56 13.28 8.17 12.67L9.41 11.41C9.78 11.05 10 10.55 10 10C10 8.89 9.1 8 8 8C7.46957 8 6.96086 8.21071 6.58579 8.58579C6.21071 8.96086 6 9.46957 6 10H4C4 8.93913 4.42143 7.92172 5.17157 7.17157C5.92172 6.42143 6.93913 6 8 6ZM19 8V11.79L16.71 9.5L16 10.21L18.79 13L16 15.79L16.71 16.5L19 14.21V18H19.5L22.35 15.14L20.21 13L22.35 10.85L19.5 8H19ZM20 9.91L20.94 10.85L20 11.79V9.91ZM20 14.21L20.94 15.14L20 16.08V14.21ZM7 17H9V19H7V17Z" />
    </Svg>
  );
};
