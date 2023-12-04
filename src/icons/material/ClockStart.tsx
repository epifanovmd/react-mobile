import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClockStartIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 1C8.14 1 5 4.14 5 8C5 9.85652 5.7375 11.637 7.05025 12.9497C8.36301 14.2625 10.1435 15 12 15C15.86 15 19 11.87 19 8C19 4.14 15.86 1 12 1ZM12 3.15C14.67 3.15 16.85 5.32 16.85 8C16.85 10.68 14.67 12.85 12 12.85C10.7137 12.85 9.48008 12.339 8.57053 11.4295C7.66098 10.5199 7.15 9.2863 7.15 8C7.15 6.7137 7.66098 5.48008 8.57053 4.57053C9.48008 3.66098 10.7137 3.15 12 3.15ZM11 5V8.69L14.19 10.53L14.94 9.23L12.5 7.82V5H11ZM4 16V24H6V21H18V24L22 20L18 16V19H6V16" />
    </Svg>
  );
};
