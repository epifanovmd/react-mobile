import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClipboardTextSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 9.00005H16.5H17ZM7 15.0001H10C10.08 14.3201 10.23 13.6401 10.5 13.0001H7V15.0001ZM11.9 10.9001C13.17 9.64005 14.84 9.00005 16.5 9.00005H7V11.0001H11.82C11.85 10.9701 11.87 10.9401 11.9 10.9001ZM11.9 20.1001C12.26 20.4501 12.65 20.7401 13.06 21.0001H5C3.9 21.0001 3 20.1101 3 19.0001V5.00005C3 3.90005 3.9 3.00005 5 3.00005H9.18C9.5 2.16005 10.14 1.50005 11 1.20005C12.53 0.640055 14.25 1.44005 14.82 3.00005H19C20.11 3.00005 21 3.90005 21 5.00005V10.8201C20.4 10.2401 19.72 9.80005 19 9.50005V5.00005H17V7.00005H7V5.00005H5V19.0001H11.03C11.27 19.3901 11.57 19.7601 11.9 20.1001ZM11 4.00005C11 4.55005 11.45 5.00005 12 5.00005C12.55 5.00005 13 4.55005 13 4.00005C13 3.45005 12.55 3.00005 12 3.00005C11.45 3.00005 11 3.45005 11 4.00005ZM23.39 21.0001L22 22.3901L18.88 19.3201C18.19 19.7501 17.37 20.0001 16.5 20.0001C14 20.0001 12 18.0001 12 15.5001C12 13.0001 14 11.0001 16.5 11.0001C19 11.0001 21 13.0001 21 15.5001C21 16.3801 20.75 17.2101 20.31 17.9001L23.39 21.0001ZM19 15.5001C19 14.1201 17.88 13.0001 16.5 13.0001C15.12 13.0001 14 14.1201 14 15.5001C14 16.8801 15.12 18.0001 16.5 18.0001C17.88 18.0001 19 16.8801 19 15.5001Z" />
    </Svg>
  );
};
