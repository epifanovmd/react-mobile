import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ReadIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.59 11.59L23 13L13.5 22.5L8.42 17.41L9.83 16L13.5 19.68L21.59 11.59ZM4 16V3H6H9C10.0609 3 11.0783 3.42143 11.8284 4.17157C12.5786 4.92172 13 5.93913 13 7C13 8.54 12.13 9.88 10.85 10.55L14 16H12L9.11 11H6V16H4ZM6 9H9C9.53043 9 10.0391 8.78929 10.4142 8.41421C10.7893 8.03914 11 7.53043 11 7C11 6.46957 10.7893 5.96086 10.4142 5.58579C10.0391 5.21071 9.53043 5 9 5H6V9Z" />
    </Svg>
  );
};
