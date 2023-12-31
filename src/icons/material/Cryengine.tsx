import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CryengineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23.03 12.5001C23 13.0001 20.91 15.2301 17.82 16.2401C14.05 17.5001 7.97003 17.0301 7.97003 12.3001C7.97003 10.0801 9.78003 8.27012 12 8.27012C14.25 8.27012 16.05 10.0901 16.05 12.3101C16.05 13.3901 15.58 14.4401 14.87 15.1801C15.54 15.1701 17.94 15.0001 20.21 13.1201C20.46 12.8801 20.62 12.6801 20.69 12.5501C20.71 12.5001 20.74 12.4601 20.73 12.4001C20.73 11.9201 18.12 8.19012 12.72 7.12012C19.22 7.46012 23 11.3201 23.03 12.4001V12.5001ZM12 10.0001C10.74 10.0001 9.71003 11.0401 9.71003 12.3001C9.71003 13.5701 10.74 14.5901 12 14.5901C13.27 14.5901 14.29 13.5701 14.29 12.3001C14.29 11.0401 13.27 10.0001 12 10.0001ZM3.31003 12.3401C3.31003 12.3401 3.31003 12.3101 3.31003 12.4201C3.41003 12.9401 4.82003 15.4101 10.28 16.8801C3.96003 16.3701 1.12003 13.2801 1.04003 12.4201H1.03003C1.03003 12.3101 1.03003 12.3601 1.03003 12.3501C1.03003 11.5001 4.96003 7.58012 10.92 7.15012C6.14003 8.26012 3.31003 11.8701 3.31003 12.3401Z" />
    </Svg>
  );
};
