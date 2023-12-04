import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CodeParenthesesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.62 3C19.13 5.27 20 8.55 20 12C20 15.44 19.13 18.72 17.62 21L16 19.96C17.26 18.07 18 15.13 18 12C18 8.87 17.26 5.92 16 4.03L17.62 3ZM6.38 3L8 4.04C6.74 5.92 6 8.87 6 12C6 15.13 6.74 18.08 8 19.96L6.38 21C4.87 18.73 4 15.45 4 12C4 8.55 4.87 5.27 6.38 3Z" />
    </Svg>
  );
};
