import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PokemonGoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 10.4 18.59 11.71 17.88 12.8L12 22.21L6.12 12.8C5.41 11.71 5 10.4 5 9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2ZM12 3.5C9.3 3.5 7.06 5.44 6.59 8H9.17C9.58 6.83 10.69 6 12 6C13.31 6 14.42 6.83 14.83 8H17.41C16.94 5.44 14.7 3.5 12 3.5ZM12 12C10.69 12 9.58 11.17 9.17 10H6.59C6.72 10.69 6.97 11.34 7.34 11.91L7.38 12C8.36 13.5 10.06 14.5 12 14.5C13.94 14.5 15.64 13.5 16.62 12L16.66 11.91C17.03 11.34 17.28 10.69 17.41 10H14.83C14.42 11.17 13.31 12 12 12ZM12 7.5C11.6022 7.5 11.2206 7.65804 10.9393 7.93934C10.658 8.22064 10.5 8.60218 10.5 9C10.5 9.39782 10.658 9.77936 10.9393 10.0607C11.2206 10.342 11.6022 10.5 12 10.5C12.3978 10.5 12.7794 10.342 13.0607 10.0607C13.342 9.77936 13.5 9.39782 13.5 9C13.5 8.60218 13.342 8.22064 13.0607 7.93934C12.7794 7.65804 12.3978 7.5 12 7.5Z" />
    </Svg>
  );
};
