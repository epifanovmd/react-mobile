import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirHumidifierIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 9C8.79 9 7 10.79 7 13C7 15.21 8.79 17 11 17C13.21 17 15 15.21 15 13C15 10.79 13.21 9 11 9ZM11 15C9.9 15 9 14.11 9 13C9 11.89 9.9 11 11 11C12.1 11 13 11.9 13 13C13 14.1 12.11 15 11 15ZM7 4H14C16.21 4 18 5.79 18 8V9H16V8C16 6.9 15.11 6 14 6H7C5.9 6 5 6.9 5 8V20H16V18H18V22H3V8C3 5.79 4.79 4 7 4ZM19 10.5C19 10.5 21 12.67 21 14C21 15.1 20.1 16 19 16C17.9 16 17 15.1 17 14C17 12.67 19 10.5 19 10.5Z" />
    </Svg>
  );
};
