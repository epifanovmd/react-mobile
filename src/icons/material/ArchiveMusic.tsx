import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveMusicIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 16.11V11H20V8H4V21H13.03C13 20.84 13 20.67 13 20.5C13 18.36 14.5 16.57 16.5 16.11ZM9 13V11.5C9 11.22 9.22 11 9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9ZM21 7H3V3H21V7ZM22 13V15H20V20.5C20 21.88 18.88 23 17.5 23C16.12 23 15 21.88 15 20.5C15 19.12 16.12 18 17.5 18C17.86 18 18.19 18.07 18.5 18.21V13H22Z" />
    </Svg>
  );
};
