import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GraphIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.5 17C19.37 17 19.24 17 19.11 17.04L17.5 13.79C17.95 13.34 18.25 12.71 18.25 12C18.25 10.62 17.13 9.5 15.75 9.5C15.62 9.5 15.5 9.5 15.36 9.54L13.73 6.29C14.21 5.84 14.5 5.21 14.5 4.5C14.5 3.12 13.38 2 12 2C10.62 2 9.5 3.12 9.5 4.5C9.5 5.21 9.79 5.84 10.26 6.29L8.64 9.54C8.5 9.5 8.38 9.5 8.25 9.5C6.87 9.5 5.75 10.62 5.75 12C5.75 12.71 6.05 13.34 6.5 13.79L4.89 17.04C4.76 17 4.63 17 4.5 17C3.12 17 2 18.12 2 19.5C2 20.88 3.12 22 4.5 22C5.88 22 7 20.88 7 19.5C7 18.8 6.71 18.16 6.24 17.71L7.86 14.46C8 14.5 8.12 14.5 8.25 14.5C8.38 14.5 8.5 14.5 8.64 14.46L10.27 17.71C9.8 18.16 9.5 18.8 9.5 19.5C9.5 20.88 10.62 22 12 22C13.38 22 14.5 20.88 14.5 19.5C14.5 18.12 13.38 17 12 17C11.87 17 11.74 17 11.61 17.04L10 13.79C10.46 13.34 10.75 12.71 10.75 12C10.75 11.29 10.46 10.66 10 10.21L11.61 6.96C11.74 7 11.87 7 12 7C12.13 7 12.26 7 12.39 6.96L14 10.21C13.55 10.66 13.25 11.3 13.25 12C13.25 13.38 14.37 14.5 15.75 14.5C15.88 14.5 16 14.5 16.14 14.46L17.77 17.71C17.3 18.16 17 18.8 17 19.5C17 20.88 18.12 22 19.5 22C20.88 22 22 20.88 22 19.5C22 18.12 20.88 17 19.5 17Z" />
    </Svg>
  );
};
