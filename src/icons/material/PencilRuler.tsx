import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PencilRulerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.99989 17.2506V21.0006H6.74989L17.8099 9.93062L14.0599 6.18062L2.99989 17.2506ZM22.6099 18.3606L18.3599 22.6106L13.1599 17.4106L14.9299 15.6406L15.9299 16.6406L18.3999 14.1606L19.8199 15.5806L18.3599 17.0006L19.4199 18.0006L20.8399 16.6006L22.6099 18.3606ZM6.60989 10.8306L1.38989 5.64062L5.63989 1.39062L7.39989 3.16063L4.92989 5.64062L5.99989 6.70062L8.45989 4.22062L9.87989 5.64062L8.45989 7.05063L9.45989 8.05063L6.60989 10.8306ZM20.7099 7.00063C21.0999 6.61063 21.0999 6.00063 20.7099 5.59063L18.3699 3.29062C17.9999 2.90062 17.3499 2.90062 16.9599 3.29062L15.1199 5.12063L18.8699 8.87063L20.7099 7.00063Z" />
    </Svg>
  );
};
