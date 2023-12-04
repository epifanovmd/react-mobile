import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteBluetoothIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.9999 9.85L19.1399 7H18.6399V10.79L16.3499 8.5L15.6399 9.21L18.4299 12L15.6399 14.79L16.3499 15.5L18.6399 13.21V17H19.1399L21.9999 14.15L19.8499 12L21.9999 9.85ZM19.6399 8.91L20.5799 9.85L19.6399 10.79V8.91ZM20.5799 14.15L19.6399 15.09V13.21L20.5799 14.15ZM9.63989 3V13.55C9.04989 13.21 8.36989 13 7.63989 13C5.42989 13 3.63989 14.79 3.63989 17C3.63989 19.21 5.42989 21 7.63989 21C9.84989 21 11.6399 19.21 11.6399 17V7H15.6399V3H9.63989Z" />
    </Svg>
  );
};
