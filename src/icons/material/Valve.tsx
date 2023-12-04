import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ValveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 22H2V2H4V22ZM22 2H20V22H22V2ZM17.24 5.34L13.24 9.34C12.6802 9.07264 12.0513 8.9854 11.4398 9.09031C10.8284 9.19522 10.2645 9.48711 9.82579 9.92579C9.38711 10.3645 9.09522 10.9284 8.99031 11.5398C8.8854 12.1512 8.97264 12.7802 9.24 13.34L5.24 17.34L6.66 18.76L10.66 14.76C11.2198 15.0274 11.8488 15.1146 12.4602 15.0097C13.0716 14.9048 13.6355 14.6129 14.0742 14.1742C14.5129 13.7355 14.8048 13.1716 14.9097 12.5602C15.0146 11.9487 14.9274 11.3198 14.66 10.76L18.66 6.76L17.24 5.34Z" />
    </Svg>
  );
};
