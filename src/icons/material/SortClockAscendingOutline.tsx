import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SortClockAscendingOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 17H23L19 21L15 17H18V3H20V17ZM8 5C4.14 5 1 8.13 1 12C1 15.87 4.13 19 8 19C11.86 19 15 15.87 15 12C15 8.13 11.87 5 8 5ZM8 7.15C10.67 7.15 12.85 9.32 12.85 12C12.85 14.68 10.68 16.85 8 16.85C5.32 16.85 3.15 14.68 3.15 12C3.15 9.32 5.32 7.15 8 7.15ZM7 9V12.69L10.19 14.53L10.94 13.23L8.5 11.82V9" />
    </Svg>
  );
};
