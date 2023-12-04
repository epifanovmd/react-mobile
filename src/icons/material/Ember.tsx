import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmberIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 14.2199C22 14.2199 17.61 17.3499 14.72 17.3899C11.84 17.4399 12.13 15.5599 12.13 15.5599C12.13 15.5599 22.71 11.9399 19.83 4.78993C18.53 2.94993 17 2.36993 14.89 2.41993C12.76 2.45993 10.17 3.75993 8.46002 7.59993C7.64002 9.43993 7.41002 11.1799 7.24002 12.4999C7.24002 12.4999 5.32002 12.8799 4.32002 12.0399C3.32002 11.1999 2.77002 12.0399 2.77002 12.0399C2.77002 12.0399 1.03002 14.1999 2.75002 14.8699C4.46002 15.5399 7.12002 15.8199 7.12002 15.8199C7.36002 16.9999 8.08002 18.9999 10.17 20.5999C13.3 22.9999 19.32 20.3999 19.32 20.3999L22 14.2199ZM11.63 12.3299C11.76 7.35993 15 5.17993 16.15 6.26993C17.27 7.35993 16.86 9.69993 14.72 11.1599C12.59 12.6299 11.63 12.3299 11.63 12.3299Z" />
    </Svg>
  );
};
