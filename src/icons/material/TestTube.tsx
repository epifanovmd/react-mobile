import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TestTubeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 2V4H8V18C8 19.0609 8.42143 20.0783 9.17157 20.8284C9.92172 21.5786 10.9391 22 12 22C13.0609 22 14.0783 21.5786 14.8284 20.8284C15.5786 20.0783 16 19.0609 16 18V4H17V2H7ZM11 16C10.4 16 10 15.6 10 15C10 14.4 10.4 14 11 14C11.6 14 12 14.4 12 15C12 15.6 11.6 16 11 16ZM13 12C12.4 12 12 11.6 12 11C12 10.4 12.4 10 13 10C13.6 10 14 10.4 14 11C14 11.6 13.6 12 13 12ZM14 7H10V4H14V7Z" />
    </Svg>
  );
};
