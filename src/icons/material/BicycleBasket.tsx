import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BicycleBasketIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.74 13.36L14.14 7.71L13.06 5.5H10.5V4H14L14.73 5.5H21.75L20.75 9H16.44L17.11 10.37C17.69 10.13 18.33 10 19 10C21.76 10 24 12.24 24 15C24 17.76 21.76 20 19 20C16.24 20 14 17.76 14 15C14 13.45 14.71 12.06 15.82 11.15L15 9.5L12.25 16H9.9C9.44 18.28 7.42 20 5 20C2.24 20 0 17.76 0 15C0 12.24 2.24 10 5 10C7.59 10 9.72 11.97 10 14.5H10.58L8.3 9H7.5C7.09 9 6.75 8.66 6.75 8.25C6.75 7.84 7.09 7.5 7.5 7.5H10.25C10.66 7.5 11 7.84 11 8.25C11 8.66 10.66 9 10.25 9H9.97L11.74 13.36ZM5 11.5C3.07 11.5 1.5 13.07 1.5 15C1.5 16.93 3.07 18.5 5 18.5C6.59 18.5 7.93 17.45 8.36 16H4V14.5H8.47C8.22 12.8 6.76 11.5 5 11.5ZM19 11.5C18.57 11.5 18.15 11.58 17.77 11.72L19.7 15.68L18.35 16.34L16.5 12.55C15.88 13.18 15.5 14.05 15.5 15C15.5 16.93 17.07 18.5 19 18.5C20.93 18.5 22.5 16.93 22.5 15C22.5 13.07 20.93 11.5 19 11.5Z" />
    </Svg>
  );
};
