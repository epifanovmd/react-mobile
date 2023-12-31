import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MotorbikeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.42 10L13.41 6H9V8H12.59L14.59 10H6.5C4 10 2 12 2 14.5C2 17 4 19 6.5 19C8.72 19 10.56 17.38 10.92 15.27L13.04 14C13 14.17 13 14.33 13 14.5C13 17 15 19 17.5 19C20 19 22 17 22 14.5C22 12 20 10 17.5 10H17.42ZM8.84 15.26C8.5 16.27 7.58 17 6.47 17C5.09 17 3.97 15.88 3.97 14.5C3.97 13.12 5.09 12 6.47 12C7.59 12 8.5 12.74 8.84 13.75H6V15.25L8.84 15.26ZM17.47 17C16.09 17 14.97 15.88 14.97 14.5C14.97 13.12 16.09 12 17.47 12C18.133 12 18.7689 12.2634 19.2378 12.7322C19.7066 13.2011 19.97 13.837 19.97 14.5C19.97 15.163 19.7066 15.7989 19.2378 16.2678C18.7689 16.7366 18.133 17 17.47 17Z" />
    </Svg>
  );
};
