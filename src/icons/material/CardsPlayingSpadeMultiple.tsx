import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsPlayingSpadeMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3ZM19 0H9C7.9 0 7 0.9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 0.9 20.1 0 19 0ZM15.8 13C15.4 13 15 12.9 14.6 12.7L15.5 15H12.5L13.4 12.7C13 12.9 12.6 13 12.2 13C11 13 10 12 10 10.8C10 9.3 11.4 8.1 13.4 6.2L14 5.7L14.6 6.2C16.6 8.1 18 9.3 18 10.8C18 12.1 17 13 15.8 13Z" />
    </Svg>
  );
};
