import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TimelineClockOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 2V8H2V2H4ZM2 22V16H4V22H2ZM5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12ZM16 4C20.42 4 24 7.58 24 12C24 16.42 20.42 20 16 20C12.4 20 9.36 17.62 8.35 14.35L6 12L8.35 9.65C9.36 6.38 12.4 4 16 4ZM16 6C12.69 6 10 8.69 10 12C10 15.31 12.69 18 16 18C19.31 18 22 15.31 22 12C22 8.69 19.31 6 16 6ZM15 13V8H16.5V12.2L19.5 14L18.68 15.26L15 13Z" />
    </Svg>
  );
};
