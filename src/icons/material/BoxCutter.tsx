import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoxCutterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.22 11.91C6.89 12.24 6.71 12.65 6.66 13.08L12.17 15.44L20.66 6.96C21.44 6.17 21.44 4.91 20.66 4.13L19.24 2.71C18.46 1.93 17.2 1.93 16.41 2.71L7.22 11.91ZM5 16V21.75L10.81 16.53L5.81 14.53L5 16ZM17.12 4.83C17.5 4.44 18.15 4.44 18.54 4.83C18.93 5.23 18.93 5.86 18.54 6.25C18.15 6.64 17.5 6.64 17.12 6.25C16.73 5.86 16.73 5.23 17.12 4.83Z" />
    </Svg>
  );
};
