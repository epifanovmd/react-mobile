import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NintendoWiiuIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 15.96C2 18.19 3.54 19.5 5.79 19.5H18.57C20.47 19.5 22 18.2 22 16.32V6.97C22 5.83 21.15 4.6 20.11 4.6H17.15V12.3C17.15 18.14 6.97 18.09 6.97 12.41V4.5H4.72C3.26 4.5 2 5.41 2 6.85V15.96ZM9.34 11.23C9.34 15.74 14.66 15.09 14.66 11.94V4.5H9.34V11.23Z" />
    </Svg>
  );
};
