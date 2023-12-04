import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BatteryChargingWirelessAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 4H11V2H5V4H3C2.4 4 2 4.4 2 5V21C2 21.6 2.4 22 3 22H13C13.6 22 14 21.6 14 21V5C14 4.4 13.6 4 13 4ZM9 18H7V16H9V18ZM9 14H7V8H9V14ZM20.1 4.9L18.7 6.3C21.8 9.4 21.8 14.5 18.7 17.6L20.1 19C24 15.2 24 8.8 20.1 4.9ZM17.2 7.8L15.8 9.2C17.4 10.8 17.4 13.3 15.8 14.9L17.2 16.3C19.6 13.9 19.6 10.1 17.2 7.8Z" />
    </Svg>
  );
};
