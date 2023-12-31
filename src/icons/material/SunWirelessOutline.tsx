import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SunWirelessOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.0001 1L13.3901 4.42C12.6501 4.15 11.8401 4 11.0001 4C10.1601 4 9.35009 4.15 8.61009 4.42L11.0001 1ZM2.34009 6L6.50009 5.65C5.90009 6.16 5.36009 6.78 4.94009 7.5C4.50009 8.24 4.25009 9 4.11009 9.79L2.34009 6ZM2.36009 16L4.12009 12.23C4.26009 13 4.53009 13.78 4.95009 14.5C5.37009 15.24 5.91009 15.86 6.50009 16.37L2.36009 16ZM19.6501 6L17.8801 9.79C17.7401 9 17.4701 8.23 17.0501 7.5C16.6301 6.78 16.1001 6.15 15.5001 5.64L19.6501 6ZM23.0001 13H21.0001C21.0001 15.05 20.2201 17.1 18.6601 18.66C17.0901 20.23 15.0501 21 13.0001 21V23C15.5601 23 18.1201 22 20.0701 20.07C22.0201 18.14 23.0001 15.56 23.0001 13ZM19.0001 13H17.0001C17.0001 14 16.6101 15.05 15.8301 15.83C15.0501 16.61 14.0001 17 13.0001 17V19C14.5401 19 16.0801 18.41 17.2501 17.24C18.4101 16.08 19.0001 14.54 19.0001 13ZM11.0001 8C12.6501 8 14.0001 9.35 14.0001 11C14.0001 12.65 12.6501 14 11.0001 14C9.35009 14 8.00009 12.65 8.00009 11C8.00009 9.35 9.35009 8 11.0001 8ZM11.0001 6C8.24009 6 6.00009 8.24 6.00009 11C6.00009 13.76 8.24009 16 11.0001 16C13.7601 16 16.0001 13.76 16.0001 11C16.0001 8.24 13.7601 6 11.0001 6Z" />
    </Svg>
  );
};
