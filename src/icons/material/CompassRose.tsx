import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CompassRoseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 9L12 0L9 9L0 12L9 15L12 24L15 15L24 12L15 9ZM4 12L10 10L11 12H4ZM12 20L10 14L12 13V20ZM12 4L14 10L12 11V4ZM14 14L13 12H20L14 14ZM8.7 17.3L5 19L6.7 15.3L8.3 15.8L8.7 17.3ZM17.3 15.3L19 19L15.3 17.3L15.8 15.7L17.3 15.3ZM6.7 8.7L5 5L8.7 6.7L8.2 8.2L6.7 8.7ZM15.3 6.7L19 5L17.3 8.7L15.7 8.2L15.3 6.7Z" />
    </Svg>
  );
};
