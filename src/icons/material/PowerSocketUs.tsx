import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PowerSocketUsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 7H10V12H8V7ZM4.22 2H19.78C21 2 22 3 22 4.22V19.78C22 20.3688 21.7661 20.9334 21.3498 21.3498C20.9334 21.7661 20.3688 22 19.78 22H4.22C3 22 2 21 2 19.78V4.22C2 3.63122 2.23389 3.06655 2.65022 2.65022C3.06655 2.23389 3.63122 2 4.22 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM14 7.5H16V11.5H14V7.5ZM10.5 16.25C10.5 15.8522 10.658 15.4706 10.9393 15.1893C11.2206 14.908 11.6022 14.75 12 14.75C12.3978 14.75 12.7794 14.908 13.0607 15.1893C13.342 15.4706 13.5 15.8522 13.5 16.25V17H10.5V16.25Z" />
    </Svg>
  );
};
