import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PacManIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.9999 11.9999L19.0699 19.0699C15.1699 22.9999 8.82992 22.9999 4.92992 19.0699C0.999922 15.1699 0.999922 8.83992 4.92992 4.92992C8.82992 0.999922 15.1599 0.999922 19.0699 4.92992L11.9999 11.9999ZM18.9999 9.99992C18.4695 9.99992 17.9608 10.2106 17.5857 10.5857C17.2106 10.9608 16.9999 11.4695 16.9999 11.9999C16.9999 12.5304 17.2106 13.0391 17.5857 13.4141C17.9608 13.7892 18.4695 13.9999 18.9999 13.9999C19.5304 13.9999 20.0391 13.7892 20.4141 13.4141C20.7892 13.0391 20.9999 12.5304 20.9999 11.9999C20.9999 11.4695 20.7892 10.9608 20.4141 10.5857C20.0391 10.2106 19.5304 9.99992 18.9999 9.99992Z" />
    </Svg>
  );
};
