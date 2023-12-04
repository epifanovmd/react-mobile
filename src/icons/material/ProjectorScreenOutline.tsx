import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProjectorScreenOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 2H4C3.45 2 3 2.45 3 3V4C3 4.55 3.45 5 4 5H5V14H11V16.59L6.79 20.79L8.21 22.21L11 19.41V22H13V19.41L15.79 22.21L17.21 20.79L13 16.59V14H19V5H20C20.55 5 21 4.55 21 4V3C21 2.45 20.55 2 20 2ZM17 12H7V5H17V12Z" />
    </Svg>
  );
};
