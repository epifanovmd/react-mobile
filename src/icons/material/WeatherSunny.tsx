import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherSunnyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 7C13.3262 7 14.5979 7.52678 15.5356 8.46447C16.4733 9.40215 17.0001 10.6739 17.0001 12C17.0001 13.3261 16.4733 14.5979 15.5356 15.5355C14.5979 16.4732 13.3262 17 12.0001 17C10.674 17 9.40224 16.4732 8.46455 15.5355C7.52687 14.5979 7.00009 13.3261 7.00009 12C7.00009 10.6739 7.52687 9.40215 8.46455 8.46447C9.40224 7.52678 10.674 7 12.0001 7ZM12.0001 9C11.2044 9 10.4414 9.31607 9.87877 9.87868C9.31616 10.4413 9.00009 11.2044 9.00009 12C9.00009 12.7956 9.31616 13.5587 9.87877 14.1213C10.4414 14.6839 11.2044 15 12.0001 15C12.7957 15 13.5588 14.6839 14.1214 14.1213C14.684 13.5587 15.0001 12.7956 15.0001 12C15.0001 11.2044 14.684 10.4413 14.1214 9.87868C13.5588 9.31607 12.7957 9 12.0001 9ZM12.0001 2L14.3901 5.42C13.6501 5.15 12.8401 5 12.0001 5C11.1601 5 10.3501 5.15 9.61009 5.42L12.0001 2ZM3.34009 7L7.50009 6.65C6.90009 7.16 6.36009 7.78 5.94009 8.5C5.50009 9.24 5.25009 10 5.11009 10.79L3.34009 7ZM3.36009 17L5.12009 13.23C5.26009 14 5.53009 14.78 5.95009 15.5C6.37009 16.24 6.91009 16.86 7.50009 17.37L3.36009 17ZM20.6501 7L18.8801 10.79C18.7401 10 18.4701 9.23 18.0501 8.5C17.6301 7.78 17.1001 7.15 16.5001 6.64L20.6501 7ZM20.6401 17L16.5001 17.36C17.0901 16.85 17.6201 16.22 18.0401 15.5C18.4601 14.77 18.7301 14 18.8701 13.21L20.6401 17ZM12.0001 22L9.59009 18.56C10.3301 18.83 11.1401 19 12.0001 19C12.8201 19 13.6301 18.83 14.3701 18.56L12.0001 22Z" />
    </Svg>
  );
};
