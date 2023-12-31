import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeHeartIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 12L12 3L22 12H19V20H5V12H2ZM12 18L12.72 17.34C15.3 15 17 13.46 17 11.57C17 10.03 15.79 8.82 14.25 8.82C13.38 8.82 12.55 9.23 12 9.87C11.45 9.23 10.62 8.82 9.75 8.82C8.21 8.82 7 10.03 7 11.57C7 13.46 8.7 15 11.28 17.34L12 18Z" />
    </Svg>
  );
};
