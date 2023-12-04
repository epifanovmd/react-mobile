import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TransitionMaskedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 2C16.94 2 18.59 2.7 19.95 4.05C21.3 5.41 22 7.06 22 9C22 10.56 21.5 11.96 20.58 13.2C19.64 14.43 18.44 15.27 16.97 15.7L17 15.38V15C17 12.81 16.23 10.93 14.65 9.35C13.07 7.77 11.19 7 9 7H8.63L8.3 7.03C8.73 5.56 9.57 4.36 10.8 3.42C12.04 2.5 13.44 2 15 2ZM9 8C10.8565 8 12.637 8.7375 13.9497 10.0503C15.2625 11.363 16 13.1435 16 15C16 16.8565 15.2625 18.637 13.9497 19.9497C12.637 21.2625 10.8565 22 9 22C7.14348 22 5.36301 21.2625 4.05025 19.9497C2.7375 18.637 2 16.8565 2 15C2 13.1435 2.7375 11.363 4.05025 10.0503C5.36301 8.7375 7.14348 8 9 8ZM9 10C7.67392 10 6.40215 10.5268 5.46447 11.4645C4.52678 12.4021 4 13.6739 4 15C4 16.3261 4.52678 17.5979 5.46447 18.5355C6.40215 19.4732 7.67392 20 9 20C9.65661 20 10.3068 19.8707 10.9134 19.6194C11.52 19.3681 12.0712 18.9998 12.5355 18.5355C12.9998 18.0712 13.3681 17.52 13.6194 16.9134C13.8707 16.3068 14 15.6566 14 15C14 14.3434 13.8707 13.6932 13.6194 13.0866C13.3681 12.48 12.9998 11.9288 12.5355 11.4645C12.0712 11.0002 11.52 10.6319 10.9134 10.3806C10.3068 10.1293 9.65661 10 9 10Z" />
    </Svg>
  );
};
