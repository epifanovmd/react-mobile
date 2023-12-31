import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatLetterCaseLowerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.0601 18C20.0001 17.83 19.9101 17.54 19.8601 17.11C19.1901 17.81 18.3801 18.16 17.4501 18.16C16.6201 18.16 15.9301 17.92 15.4001 17.45C14.8701 17 14.6001 16.39 14.6001 15.66C14.6001 14.78 14.9301 14.1 15.6001 13.61C16.2701 13.12 17.2101 12.88 18.4301 12.88H19.8301V12.24C19.8301 11.75 19.6801 11.36 19.3801 11.07C19.0801 10.78 18.6301 10.64 18.0501 10.64C17.5301 10.64 17.1001 10.76 16.7501 11C16.4001 11.25 16.2301 11.54 16.2301 11.89H14.7701C14.7701 11.46 14.9201 11.05 15.2201 10.65C15.5001 10.25 15.9301 9.94 16.4401 9.71C16.9501 9.5 17.5001 9.36 18.1301 9.36C19.1101 9.36 19.8701 9.6 20.4201 10.09C20.9701 10.58 21.2601 11.25 21.2801 12.11V16C21.2801 16.8 21.3801 17.42 21.5801 17.88V18H20.0601ZM17.6601 16.88C18.1101 16.88 18.5401 16.77 18.9501 16.56C19.3501 16.35 19.6501 16.07 19.8301 15.73V14.16H18.7001C16.9301 14.16 16.0401 14.63 16.0401 15.57C16.0401 16 16.1901 16.3 16.5001 16.53C16.8001 16.76 17.1801 16.88 17.6601 16.88ZM5.46005 13.71H9.53005L7.50005 8.29L5.46005 13.71ZM6.64005 6H8.36005L13.0701 18H11.1401L10.1701 15.43H4.82005L3.86005 18H1.93005L6.64005 6ZM22.0001 20V22H14.5001V20H22.0001Z" />
    </Svg>
  );
};
