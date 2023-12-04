import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SetCenterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 5C7.14348 5 5.36301 5.7375 4.05025 7.05025C2.7375 8.36301 2 10.1435 2 12C2 13.8565 2.7375 15.637 4.05025 16.9497C5.36301 18.2625 7.14348 19 9 19C10.04 19 11.06 18.76 12 18.32C12.94 18.76 13.96 19 15 19C16.8565 19 18.637 18.2625 19.9497 16.9497C21.2625 15.637 22 13.8565 22 12C22 10.1435 21.2625 8.36301 19.9497 7.05025C18.637 5.7375 16.8565 5 15 5C13.96 5 12.94 5.24 12 5.68C11.06 5.24 10.04 5 9 5ZM9 7C9.34 7 9.67 7.03 10 7.1C8.72 8.41 8 10.17 8 12C8 13.83 8.72 15.59 10 16.89C9.67 16.96 9.34 17 9 17C7.67392 17 6.40215 16.4732 5.46447 15.5355C4.52678 14.5979 4 13.3261 4 12C4 10.6739 4.52678 9.40215 5.46447 8.46447C6.40215 7.52678 7.67392 7 9 7ZM15 7C16.3261 7 17.5979 7.52678 18.5355 8.46447C19.4732 9.40215 20 10.6739 20 12C20 13.3261 19.4732 14.5979 18.5355 15.5355C17.5979 16.4732 16.3261 17 15 17C14.66 17 14.33 16.97 14 16.9C15.28 15.59 16 13.83 16 12C16 10.17 15.28 8.41 14 7.11C14.33 7.04 14.66 7 15 7Z" />
    </Svg>
  );
};
