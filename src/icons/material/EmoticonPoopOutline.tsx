import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonPoopOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.4201 13.87C21.2001 13.41 20.8401 12.94 20.2501 12.64C19.8501 12.39 19.5001 12.26 19.2401 12.2C19.5001 11.25 19.1301 10.5 18.6201 9.94C17.8501 9.12 17.0601 9 17.0601 9C17.3201 8.5 17.4201 7.9 17.2801 7.32C17.1201 6.61 16.7301 6.16 16.2201 5.86C15.7001 5.55 15.0601 5.4 14.4001 5.28C14.0801 5.22 12.7501 5.03 12.2001 4.27C11.7501 3.65 11.7401 2.53 11.6201 2.2C11.5701 2.07 11.5001 2 11.3601 2C11.1501 2 10.8701 2.12 10.5701 2.32C10.0001 2.7 8.8501 3.9 8.4001 5.1C8.0601 6 8.0501 6.82 8.1901 7.43C7.6301 7.53 7.2201 7.71 7.0601 7.78C6.5501 8 5.4701 8.96 5.3701 10.45C5.3401 10.89 5.4101 11.34 5.5001 11.78C5.5001 11.86 5.5001 11.94 5.5001 12.03C4.8801 12.22 4.5301 12.43 4.5001 12.44C4.1801 12.56 3.6501 12.93 3.5001 13.13C3.1501 13.53 2.9201 14 2.7901 14.5C2.5001 15.59 2.6001 16.83 3.1301 17.83C3.4201 18.39 3.8201 19 4.2601 19.43C5.7001 20.91 8.1801 21.47 10.1401 21.79C10.9601 21.93 11.8001 22 12.6301 22C14.2201 22 15.8001 21.73 17.2601 21.13C20.6101 19.74 21.5001 17.5 21.6401 16.89C21.9301 15.5 21.5701 14.19 21.4201 13.87ZM16.0501 11.33C16.6101 11.36 17.0401 11.84 17.0001 12.4C16.9601 12.95 16.5001 13.38 15.9101 13.34C15.3501 13.31 14.9201 12.83 14.9601 12.28C15.0001 11.75 15.4201 11.35 15.9401 11.33C16.0001 11.33 16.0001 11.33 16.0501 11.33ZM20.1801 16.55C20.1701 16.57 19.7001 18.5 16.6901 19.74C15.4701 20.25 14.1001 20.5 12.6301 20.5C11.9001 20.5 11.1401 20.44 10.3801 20.31C8.7601 20.05 6.5001 19.56 5.3101 18.36C5.0401 18.09 4.7201 17.63 4.4601 17.13C4.1201 16.5 4.0401 15.65 4.2401 14.88C4.3201 14.58 4.4501 14.32 4.6301 14.12L4.6501 14.09C4.7401 14 4.9501 13.88 5.0301 13.84L5.1401 13.8L5.2601 13.74C5.3201 13.7 5.4601 13.63 5.6701 13.55C6.1301 14.81 7.2801 15.7 8.5901 15.7C8.6701 15.7 8.7401 15.69 8.8201 15.69C9.6501 15.63 10.4101 15.22 10.9401 14.55C11.4701 13.89 11.7301 13.04 11.6601 12.17C11.5401 10.5 10.2201 9.16 8.6401 9.11H8.6201C8.5001 9.11 8.4001 9.11 8.3101 9.12C8.0001 9.15 7.7301 9.23 7.4601 9.34C7.5501 9.24 7.6301 9.17 7.6601 9.15C7.7901 9.1 8.0701 9 8.4501 8.91L10.0001 8.63L9.6501 7.09C9.6101 6.9 9.5301 6.35 9.8101 5.63C9.9601 5.2 10.2701 4.76 10.5801 4.38C10.6801 4.65 10.8101 4.91 11.0001 5.15C11.7701 6.23 13.1201 6.58 14.0601 6.74L14.1301 6.76C14.6001 6.84 15.1301 6.95 15.4601 7.15C15.6701 7.28 15.7601 7.41 15.8201 7.67C15.8701 7.87 15.8401 8.1 15.7301 8.31L15.2101 9.2C13.9501 9.5 12.9501 10.64 12.7901 12.06C12.5901 13.87 13.7801 15.46 15.5001 15.68C15.6201 15.69 15.7401 15.7 15.8501 15.7C16.5601 15.7 17.2501 15.44 17.8201 14.95C18.2301 14.59 18.5401 14.13 18.7401 13.62L18.9001 13.66C19.0001 13.68 19.1701 13.74 19.4501 13.91L19.5001 13.95L19.5701 14C19.7801 14.08 19.9401 14.26 20.0501 14.5C20.1301 14.67 20.3801 15.6 20.1801 16.55ZM7.6401 12.45C7.5701 11.9 7.9701 11.39 8.5301 11.32C8.5701 11.31 8.6001 11.31 8.6401 11.31C9.1501 11.3 9.6101 11.67 9.6701 12.19C9.7301 12.74 9.3301 13.25 8.7701 13.32C8.2101 13.39 7.7001 13 7.6401 12.45ZM8.7101 16.15C9.0001 16.14 9.2601 16.23 9.5001 16.28C10.6801 16.5 11.7001 16.53 12.1901 16.53C12.6801 16.53 13.6901 16.5 14.8601 16.28C15.2701 16.2 15.7401 16.03 16.1101 16.28C16.5901 16.6 16.2401 17.75 15.5001 18.53C15.0401 19 13.9701 19.91 12.1901 19.91C10.4101 19.91 9.3301 19 8.8801 18.53C8.1401 17.75 7.7901 16.6 8.2601 16.28C8.4001 16.19 8.5501 16.15 8.7101 16.15Z" />
    </Svg>
  );
};
