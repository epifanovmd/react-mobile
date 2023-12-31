import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarCruiseControlIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 15C22 17.6 20.8 19.9 18.9 21.3L18.4 20.8L16.3 18.7L17.7 17.3L18.9 18.5C19.4 17.8 19.8 16.9 19.9 16H18V14H19.9C19.7 13.1 19.4 12.3 18.9 11.5L17.7 12.7L16.3 11.3L17.5 10.1C16.8 9.6 15.9 9.2 15 9.1V11H13V9.1C12.1 9.3 11.3 9.6 10.5 10.1L13.5 13.1C13.7 13.1 13.8 13 14 13C14.5304 13 15.0391 13.2107 15.4142 13.5858C15.7893 13.9609 16 14.4696 16 15C16 15.5304 15.7893 16.0391 15.4142 16.4142C15.0391 16.7893 14.5304 17 14 17C13.4696 17 12.9609 16.7893 12.5858 16.4142C12.2107 16.0391 12 15.5304 12 15C12 14.8 12 14.7 12.1 14.5L9.1 11.5C8.6 12.2 8.2 13.1 8.1 14H10V16H8.1C8.3 16.9 8.6 17.7 9.1 18.5L10.3 17.3L11.7 18.7L9.1 21.3C7.2 19.9 6 17.6 6 15C6 12.8783 6.84285 10.8434 8.34315 9.34315C9.84344 7.84285 11.8783 7 14 7C16.1217 7 18.1566 7.84285 19.6569 9.34315C21.1571 10.8434 22 12.8783 22 15ZM6.7 5.3L3.4 2L2 3.4L5.3 6.7L4 8H8V4L6.7 5.3Z" />
    </Svg>
  );
};
