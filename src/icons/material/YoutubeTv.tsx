import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const YoutubeTvIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.5 4.5H21.5C22.34 4.5 23 5.15 23 6V17.5C23 18.35 22.34 19 21.5 19H2.5C1.65 19 1 18.35 1 17.5V6C1 5.15 1.65 4.5 2.5 4.5ZM9.71 8.5V15L15.42 11.7L9.71 8.5ZM17.25 21H6.65C6.35 21 6.15 20.8 6.15 20.5C6.15 20.2 6.35 20 6.65 20H17.35C17.65 20 17.85 20.2 17.85 20.5C17.85 20.8 17.55 21 17.25 21Z" />
    </Svg>
  );
};
