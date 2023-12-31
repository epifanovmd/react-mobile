import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyedropperOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.0001 7.23957L19.0801 9.15957L14.8401 4.91957L16.7601 2.99957C17.9301 1.82957 19.8301 1.82957 21.0001 2.99957C22.1701 4.16957 22.1701 6.06957 21.0001 7.23957ZM10.9401 8.81957L12.3601 10.2396L13.0001 9.59957L14.4001 10.9996L13.7601 11.6396L15.1801 13.0596L15.8101 12.4296L17.2201 13.8496L19.3501 11.7196L12.2801 4.64957L10.1501 6.77957L11.5701 8.18957L10.9401 8.81957ZM19.8601 20.2896L18.5801 21.5696L12.6301 15.6096L8.10011 20.1396L3.50011 21.9996L2.00011 20.4996L3.86011 15.8996L8.39011 11.3696L1.86011 4.84957L3.14011 3.56957L19.8601 20.2896ZM11.2101 14.1996L9.81011 12.7896L5.56011 17.0296L4.50011 19.4996L6.97011 18.4396L11.2101 14.1996Z" />
    </Svg>
  );
};
