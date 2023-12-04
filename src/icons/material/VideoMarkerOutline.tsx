import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VideoMarkerOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.5 16.8C4.8 16.8 4.3 16.2 4.3 15.6C4.3 14.9 4.9 14.4 5.5 14.4C6.1 14.4 6.7 15 6.7 15.6C6.8 16.2 6.2 16.8 5.5 16.8ZM5.5 12C3.6 12 2 13.6 2 15.5C2 18.1 5.5 22 5.5 22C5.5 22 9 18.1 9 15.5C9 13.6 7.4 12 5.5 12ZM4 6C3.4 6 3 6.4 3 7V10.6C3.6 10.3 4.3 10.1 5 10V8H15V16H11C10.9 16.7 10.8 17.4 10.5 18H16C16.6 18 17 17.6 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.4 16.6 6 16 6H4Z" />
    </Svg>
  );
};
