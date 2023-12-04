import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WavesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 11.9999H22V13.9999H20C18.62 13.9999 17.26 13.6499 16 12.9999C13.5 14.2999 10.5 14.2999 8 12.9999C6.74 13.6499 5.37 13.9999 4 13.9999H2V11.9999H4C5.39 11.9999 6.78 11.5299 8 10.6699C10.44 12.3799 13.56 12.3799 16 10.6699C17.22 11.5299 18.61 11.9999 20 11.9999ZM20 5.99992H22V7.99992H20C18.62 7.99992 17.26 7.64992 16 6.99992C13.5 8.29992 10.5 8.29992 8 6.99992C6.74 7.64992 5.37 7.99992 4 7.99992H2V5.99992H4C5.39 5.99992 6.78 5.52992 8 4.66992C10.44 6.37992 13.56 6.37992 16 4.66992C17.22 5.52992 18.61 5.99992 20 5.99992ZM20 17.9999H22V19.9999H20C18.62 19.9999 17.26 19.6499 16 18.9999C13.5 20.2999 10.5 20.2999 8 18.9999C6.74 19.6499 5.37 19.9999 4 19.9999H2V17.9999H4C5.39 17.9999 6.78 17.5299 8 16.6699C10.44 18.3799 13.56 18.3799 16 16.6699C17.22 17.5299 18.61 17.9999 20 17.9999Z" />
    </Svg>
  );
};
