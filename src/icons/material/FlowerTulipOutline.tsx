import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlowerTulipOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 13C3 15.3869 3.94821 17.6761 5.63604 19.364C7.32387 21.0518 9.61305 22 12 22C12 19.6131 11.0518 17.3239 9.36396 15.636C7.67613 13.9482 5.38695 13 3 13ZM5.44 15.44C7.35 16.15 8.85 17.65 9.56 19.56C7.65 18.85 6.15 17.35 5.44 15.44ZM12 22C14.3869 22 16.6761 21.0518 18.364 19.364C20.0518 17.6761 21 15.3869 21 13C18.6131 13 16.3239 13.9482 14.636 15.636C12.9482 17.3239 12 19.6131 12 22ZM14.42 19.57C15.11 17.64 16.64 16.11 18.57 15.42C17.86 17.34 16.34 18.86 14.42 19.57ZM12 14C13.5913 14 15.1174 13.3679 16.2426 12.2426C17.3679 11.1174 18 9.5913 18 8V3C17.26 3 16.53 3.12 15.84 3.39C15.29 3.62 14.8 3.96 14.39 4.39L12 2L9.61 4.39C9.2 3.96 8.71 3.62 8.16 3.39C7.47 3.12 6.74 3 6 3V8C6 9.5913 6.63214 11.1174 7.75736 12.2426C8.88258 13.3679 10.4087 14 12 14ZM8 5.61L9.57 7.26L12 4.83L14.43 7.26L16 5.61V8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8V5.61Z" />
    </Svg>
  );
};
