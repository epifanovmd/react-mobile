import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlarmMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.29 3.25L5.16 6.72L4 5.34L8.14 1.87L9.29 3.25ZM22 5.35L20.84 6.73L16.7 3.25L17.86 1.87L22 5.35ZM13 4C15.1217 4 17.1566 4.84285 18.6569 6.34314C20.1571 7.84343 21 9.87826 21 12C21 14.1217 20.1571 16.1566 18.6569 17.6568C17.1566 19.1571 15.1217 20 13 20C10.8783 20 8.84344 19.1571 7.34315 17.6568C5.84285 16.1566 5 14.1217 5 12C5 9.87826 5.84285 7.84343 7.34315 6.34314C8.84344 4.84285 10.8783 4 13 4ZM13 6C11.4087 6 9.88258 6.63214 8.75736 7.75735C7.63214 8.88257 7 10.4087 7 12C7 13.5913 7.63214 15.1174 8.75736 16.2426C9.88258 17.3679 11.4087 18 13 18C14.5913 18 16.1174 17.3679 17.2426 16.2426C18.3679 15.1174 19 13.5913 19 12C19 10.4087 18.3679 8.88257 17.2426 7.75735C16.1174 6.63214 14.5913 6 13 6ZM12 7.5H13.5V12.03L16.72 13.5L16.1 14.86L12 13V7.5ZM1 14C1 11.5 2.13 9.3 3.91 7.83C3.33 9.1 3 10.5 3 12L3.06 13.13L3 14C3 16.28 4.27 18.26 6.14 19.28C7.44 20.5 9.07 21.39 10.89 21.78C10.28 21.92 9.65 22 9 22C6.87827 22 4.84344 21.1571 3.34315 19.6568C1.84285 18.1566 1 16.1217 1 14Z" />
    </Svg>
  );
};
