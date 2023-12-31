import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BugCheckOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 7H15.19C14.74 6.2 14.12 5.5 13.37 5L15 3.41L13.59 2L11.42 4.17C10.96 4.06 10.5 4 10 4C9.5 4 9.05 4.06 8.59 4.17L6.41 2L5 3.41L6.62 5C5.87 5.5 5.26 6.21 4.81 7H2V9H4.09C4.03 9.33 4 9.66 4 10V11H2V13H4V14C4 14.34 4.03 14.67 4.09 15H2V17H4.81C6.26 19.5 9.28 20.61 12 19.65C12 19.43 12 19.22 12 19C12 18.43 12.09 17.86 12.25 17.31C11.59 17.76 10.8 18 10 18C8.93913 18 7.92172 17.5786 7.17157 16.8284C6.42143 16.0783 6 15.0609 6 14V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10V14C14 14.19 14 14.39 13.95 14.58C14.54 14.04 15.24 13.62 16 13.35V13H18V11H16V10C16 9.66 15.97 9.33 15.91 9H18V7ZM21.34 16L17.75 19.59L16.16 18L15 19.16L17.75 22.16L22.5 17.41L21.34 16ZM12 9V11H8V9H12ZM12 13V15H8V13H12Z" />
    </Svg>
  );
};
