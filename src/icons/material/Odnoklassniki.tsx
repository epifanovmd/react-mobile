import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OdnoklassnikiIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.8301 12.74C17.5501 12.17 16.7601 11.69 15.7101 12.5C14.2801 13.64 12.0001 13.64 12.0001 13.64C12.0001 13.64 9.72005 13.64 8.29005 12.5C7.24005 11.69 6.45005 12.17 6.17005 12.74C5.67005 13.74 6.23005 14.23 7.50005 15.04C8.59005 15.74 10.0801 16 11.0401 16.1L10.2401 16.9C9.10005 18.03 8.00005 19.12 7.25005 19.88C6.80005 20.34 6.80005 21.07 7.25005 21.5L7.39005 21.66C7.84005 22.11 8.58005 22.11 9.03005 21.66L12.0001 18.68C13.1501 19.81 14.2401 20.9 15.0001 21.66C15.4501 22.11 16.18 22.11 16.64 21.66L16.7701 21.5C17.2301 21.07 17.2301 20.34 16.7701 19.88L13.7901 16.9L13.0001 16.09C13.9501 16 15.4201 15.73 16.5001 15.04C17.7701 14.23 18.3301 13.74 17.8301 12.74ZM12.0001 4.57C13.3801 4.57 14.5001 5.69 14.5001 7.06C14.5001 8.44 13.3801 9.55 12.0001 9.55C10.6201 9.55 9.50005 8.44 9.50005 7.06C9.50005 5.69 10.6201 4.57 12.0001 4.57ZM12.0001 12.12C14.8001 12.12 17.0601 9.86 17.0601 7.06C17.0601 4.27 14.8001 2 12.0001 2C9.20005 2 6.94005 4.27 6.94005 7.06C6.94005 9.86 9.20005 12.12 12.0001 12.12Z" />
    </Svg>
  );
};
