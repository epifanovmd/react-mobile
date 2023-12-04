import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkiIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.92 13.32C17.67 13.28 16.71 13 16.46 12.89L14.39 19.37L11.3 18.24L13.5 12.47L10.45 9L13 7.54C13.45 8.67 14.17 9.62 15.12 10.4C16.07 11.18 17.16 11.67 18.38 11.86L19.5 8.43L18.06 7.96L17.54 9.56C16.88 9.28 16.3 8.86 15.8 8.32C15.3 7.77 14.94 7.13 14.72 6.41L14.39 5.33C14.27 4.93 14.04 4.61 13.71 4.37C13.38 4.14 13 4 12.63 3.97C12.24 3.94 11.86 4 11.5 4.21L8 6.23C7.63 6.44 7.36 6.74 7.19 7.12C7 7.5 6.96 7.88 7 8.29C7.04 8.7 7.26 9.06 7.54 9.37L11.11 13.08L9.42 17.54L2.47 15.05L2 16.46L16.04 21.58C16.82 21.86 17.65 22 18.53 22C19.15 22 19.76 21.92 20.36 21.77C20.95 21.61 21.5 21.39 22 21.11L20.87 20C20.12 20.33 19.34 20.5 18.53 20.5C17.87 20.5 17.21 20.39 16.55 20.17L15.8 19.89L17.92 13.32ZM19 3C19 4.11 18.11 5 17 5C15.89 5 15 4.11 15 3C15 1.89 15.9 1 17 1C18.1 1 19 1.9 19 3Z" />
    </Svg>
  );
};
