import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SetAllIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 5C10.04 5 11.06 5.24 12 5.68C12.94 5.24 13.96 5 15 5C16.8565 5 18.637 5.7375 19.9497 7.05025C21.2625 8.36301 22 10.1435 22 12C22 13.8565 21.2625 15.637 19.9497 16.9497C18.637 18.2625 16.8565 19 15 19C13.96 19 12.94 18.76 12 18.32C11.06 18.76 10.04 19 9 19C7.14348 19 5.36301 18.2625 4.05025 16.9497C2.7375 15.637 2 13.8565 2 12C2 10.1435 2.7375 8.36301 4.05025 7.05025C5.36301 5.7375 7.14348 5 9 5ZM8.5 12C8.5 13.87 9.29 15.56 10.56 16.75L11.56 16.29C10.31 15.29 9.5 13.74 9.5 12C9.5 10.26 10.31 8.71 11.56 7.71L10.56 7.25C9.29 8.44 8.5 10.13 8.5 12ZM15.5 12C15.5 10.13 14.71 8.44 13.44 7.25L12.44 7.71C13.69 8.71 14.5 10.26 14.5 12C14.5 13.74 13.69 15.29 12.44 16.29L13.44 16.75C14.71 15.56 15.5 13.87 15.5 12Z" />
    </Svg>
  );
};
