import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlarmPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 8.99999H11V12H8V14H11V17H13V14H16V12H13V8.99999ZM12 20C10.1435 20 8.36301 19.2625 7.05025 17.9497C5.7375 16.637 5 14.8565 5 13C5 11.1435 5.7375 9.36299 7.05025 8.05024C8.36301 6.73748 10.1435 5.99999 12 5.99999C13.8565 5.99999 15.637 6.73748 16.9497 8.05024C18.2625 9.36299 19 11.1435 19 13C19 14.8565 18.2625 16.637 16.9497 17.9497C15.637 19.2625 13.8565 20 12 20ZM12 3.99999C9.61305 3.99999 7.32387 4.9482 5.63604 6.63602C3.94821 8.32385 3 10.613 3 13C3 15.3869 3.94821 17.6761 5.63604 19.3639C7.32387 21.0518 9.61305 22 12 22C14.3869 22 16.6761 21.0518 18.364 19.3639C20.0518 17.6761 21 15.3869 21 13C21 10.613 20.0518 8.32385 18.364 6.63602C16.6761 4.9482 14.3869 3.99999 12 3.99999ZM22 5.71999L17.4 1.85999L16.11 3.38999L20.71 7.24999L22 5.71999ZM7.88 3.38999L6.6 1.85999L2 5.70999L3.29 7.23998L7.88 3.38999Z" />
    </Svg>
  );
};
