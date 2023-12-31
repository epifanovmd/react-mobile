import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VanishIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 13V11H21V13H16ZM14.83 7.76L17.66 4.93L19.07 6.34L16.24 9.17L14.83 7.76ZM11 16H13V21H11V16ZM11 3H13V8H11V3ZM4.93 17.66L7.76 14.83L9.17 16.24L6.34 19.07L4.93 17.66ZM4.93 6.34L6.34 4.93L9.17 7.76L7.76 9.17L4.93 6.34ZM8 13H3V11H8V13ZM19.07 17.66L17.66 19.07L14.83 16.24L16.24 14.83L19.07 17.66Z" />
    </Svg>
  );
};
