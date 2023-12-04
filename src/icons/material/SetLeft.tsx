import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SetLeftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 5C7.14348 5 5.36301 5.7375 4.05025 7.05025C2.7375 8.36301 2 10.1435 2 12C2 13.8565 2.7375 15.637 4.05025 16.9497C5.36301 18.2625 7.14348 19 9 19C10.04 19 11.06 18.76 12 18.32C12.94 18.76 13.96 19 15 19C16.8565 19 18.637 18.2625 19.9497 16.9497C21.2625 15.637 22 13.8565 22 12C22 10.1435 21.2625 8.36301 19.9497 7.05025C18.637 5.7375 16.8565 5 15 5C13.96 5 12.94 5.24 12 5.68C11.06 5.24 10.04 5 9 5ZM15 7C16.3261 7 17.5979 7.52678 18.5355 8.46447C19.4732 9.40215 20 10.6739 20 12C20 13.3261 19.4732 14.5979 18.5355 15.5355C17.5979 16.4732 16.3261 17 15 17C14.66 17 14.33 16.97 14 16.9C15.28 15.59 16 13.83 16 12C16 10.17 15.28 8.41 14 7.11C14.33 7.04 14.66 7 15 7ZM12 8C13.26 8.95 14 10.43 14 12C14 13.57 13.26 15.05 12 16C10.74 15.05 10 13.57 10 12C10 10.43 10.74 8.95 12 8Z" />
    </Svg>
  );
};
