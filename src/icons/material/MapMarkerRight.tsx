import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerRightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 11.5C7.62 11.5 6.5 10.38 6.5 9C6.5 7.62 7.62 6.5 9 6.5C10.38 6.5 11.5 7.62 11.5 9C11.5 10.38 10.38 11.5 9 11.5ZM9 2C5.13 2 2 5.13 2 9C2 14.25 9 22 9 22C9 22 16 14.25 16 9C16 5.13 12.87 2 9 2ZM18 17L23 12L18 7V17Z" />
    </Svg>
  );
};
