import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseSearchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.68 12.32C16.92 10.56 14.07 10.57 12.32 12.33C10.56 14.09 10.56 16.94 12.32 18.69C13.81 20.17 16.11 20.43 17.89 19.32L21 22.39L22.39 21L19.3 17.89C20.43 16.12 20.17 13.8 18.68 12.32ZM17.27 17.27C16.29 18.25 14.71 18.24 13.73 17.27C12.76 16.29 12.76 14.71 13.74 13.73C14.71 12.76 16.29 12.76 17.27 13.73C18.24 14.71 18.24 16.29 17.27 17.27ZM10.9 20.1C10.25 19.44 9.74 18.65 9.42 17.78C6.27 17.25 4 15.76 4 14V17C4 19.21 7.58 21 12 21C11.6 20.74 11.23 20.44 10.9 20.1ZM4 9V12C4 13.68 6.07 15.12 9 15.7C9 15.63 9 15.57 9 15.5C9 14.57 9.2 13.65 9.58 12.81C6.34 12.3 4 10.79 4 9ZM12 3C7.58 3 4 4.79 4 7C4 9 7 10.68 10.85 11H10.9C12.1 9.74 13.76 9 15.5 9C16.41 9 17.31 9.19 18.14 9.56C19.17 9.09 19.87 8.12 20 7C20 4.79 16.42 3 12 3Z" />
    </Svg>
  );
};
