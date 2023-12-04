import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CursorDefaultGestureIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.59 7.99989C15.26 7.99989 15 8.26989 15 8.59989V17.5699C15 17.8999 15.26 18.1699 15.59 18.1699C15.74 18.1699 15.86 18.1199 15.96 18.0399L17.45 16.8299L18.74 19.6599C18.84 19.8799 19.05 19.9999 19.27 19.9999C19.36 19.9999 19.44 19.9999 19.53 19.9399L21.67 18.9299C21.97 18.7899 22.11 18.4299 21.95 18.1399L20.66 15.2999L22.53 14.9399C22.65 14.9099 22.77 14.8499 22.86 14.7399C23.07 14.4999 23.04 14.1199 22.77 13.8899L16 8.12989C15.88 8.04989 15.74 7.99989 15.59 7.99989ZM12.5 6.72989C12.72 6.65989 13.17 7.18989 13.59 7.75989L15 6.70989C14.87 6.49989 14.69 6.24989 14.47 5.95989C14.31 5.74989 13.59 4.92989 12.66 4.79989C12.04 4.71989 10.81 5.05989 10.6 6.60989C10.47 7.57989 10.76 8.18989 11.21 9.07989C11.46 9.59989 12.04 10.9599 12.18 11.7799C12.33 12.5899 12.06 13.1599 11.74 13.1199C11.44 13.0799 11.2 12.6499 11.03 12.4099C10.89 12.2199 10 10.8199 9.67 10.2299C9.22 9.49989 8.04 7.95989 6.44 7.73989C4.35 7.45989 3.44 9.19989 3.18 10.3599L1 10.0599V11.8799L2.93 12.1499C2.75 15.5999 4.5 16.8199 5.67 16.9999C6.92 17.1499 8.08 16.2799 8.24 15.0599C8.41 13.8399 7.56 11.4999 4.96 10.6899C5.1 10.1499 5.21 9.42989 6.36 9.58989C7.26 9.70989 8.21 11.2599 8.93 12.4399C9.58 13.5299 10.1 14.3899 10.83 14.7199C11.45 14.9999 12.16 14.9699 12.73 14.6499C13.42 14.2599 13.86 13.5499 14 12.6299C14.22 10.8999 12.7 8.16989 12.57 7.83989C12.4 7.45989 12.12 6.81989 12.5 6.72989ZM6.5 14.7799C6.43 15.1099 6.1 15.2499 5.88 15.2199C5.38 15.1599 4.66 14.4999 4.71 12.5299C6.17 13.1299 6.53 14.3499 6.5 14.7799Z" />
    </Svg>
  );
};
