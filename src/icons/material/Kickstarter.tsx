import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KickstarterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.3 10.2L17.5 12L19.3 13.8C21.19 15.67 21.19 18.72 19.3 20.59C17.42 22.46 14.35 22.46 12.47 20.59L11.8 19.93C10.93 21.19 9.5 22 7.83 22C5.16 22 3 19.85 3 17.2V6.8C3 4.15 5.16 2 7.83 2C9.5 2 10.93 2.82 11.8 4.07L12.47 3.41C14.35 1.54 17.42 1.54 19.3 3.41C21.19 5.28 21.19 8.33 19.3 10.2Z" />
    </Svg>
  );
};
