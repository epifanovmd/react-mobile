import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WhatsappIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.04 2C6.58005 2 2.13005 6.45 2.13005 11.91C2.13005 13.66 2.59005 15.36 3.45005 16.86L2.05005 22L7.30005 20.62C8.75005 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.9501 17.38 21.9501 11.92C21.9501 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.2801 9.72 20.2801 11.92C20.2801 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11005 19.76 7.85005 19L7.55005 18.83L4.43005 19.65L5.26005 16.61L5.06005 16.29C4.24005 15 3.80005 13.47 3.80005 11.91C3.81005 7.37 7.50005 3.67 12.05 3.67ZM8.53005 7.33C8.37005 7.33 8.10005 7.39 7.87005 7.64C7.65005 7.89 7.00005 8.5 7.00005 9.71C7.00005 10.93 7.89005 12.1 8.00005 12.27C8.14005 12.44 9.76005 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77005 11.64 9.62005 11.39C9.50005 11.15 9.61005 11 9.73005 10.89C9.84005 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77005 8.26 9.56005 7.77C9.36005 7.29 9.16005 7.35 9.00005 7.34C8.86005 7.34 8.70005 7.33 8.53005 7.33Z" />
    </Svg>
  );
};
