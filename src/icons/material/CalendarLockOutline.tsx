import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CalendarLockOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 20H5V10H19V11.05C19.74 11.13 20.42 11.38 21 11.78V6C21 4.89 20.11 4 19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.11 3.9 22 5 22H13.18C13.07 21.69 13 21.35 13 21V20ZM5 6H19V8H5V6ZM21 16V15.5C21 14.12 19.88 13 18.5 13C17.12 13 16 14.12 16 15.5V16C15.45 16 15 16.45 15 17V21C15 21.55 15.45 22 16 22H21C21.55 22 22 21.55 22 21V17C22 16.45 21.55 16 21 16ZM20 16H17V15.5C17 14.67 17.67 14 18.5 14C19.33 14 20 14.67 20 15.5V16Z" />
    </Svg>
  );
};
