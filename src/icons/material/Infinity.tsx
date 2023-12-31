import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const InfinityIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.6 6.61914C21.58 6.61914 24 8.99914 24 11.9991C24 14.9591 21.58 17.3691 18.6 17.3691C17.15 17.3691 15.8 16.8091 14.78 15.7991L12 13.3391L9.17 15.8491C8.2 16.8191 6.84 17.3791 5.4 17.3791C2.42 17.3791 0 14.9591 0 11.9991C0 9.03914 2.42 6.61914 5.4 6.61914C6.84 6.61914 8.2 7.17914 9.22 8.19914L12 10.6591L14.83 8.14914C15.8 7.17914 17.16 6.61914 18.6 6.61914ZM7.8 14.3891L10.5 11.9991L7.84 9.64914C7.16 8.96914 6.31 8.61914 5.4 8.61914C3.53 8.61914 2 10.1291 2 11.9991C2 13.8691 3.53 15.3791 5.4 15.3791C6.31 15.3791 7.16 15.0291 7.8 14.3891ZM16.2 9.60914L13.5 11.9991L16.16 14.3491C16.84 15.0291 17.7 15.3791 18.6 15.3791C20.47 15.3791 22 13.8691 22 11.9991C22 10.1291 20.47 8.61914 18.6 8.61914C17.69 8.61914 16.84 8.96914 16.2 9.60914Z" />
    </Svg>
  );
};
