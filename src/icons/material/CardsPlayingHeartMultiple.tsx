import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsPlayingHeartMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3ZM19 0H9C7.9 0 7 0.9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 0.9 20.1 0 19 0ZM14.6 13.8L14 14.3L13.4 13.8C11.4 11.9 10 10.7 10 9.2C10 8 11 7 12.2 7C12.9 7 13.6 7.3 14 7.8C14.4 7.3 15.1 7 15.8 7C17 7 18 7.9 18 9.2C18 10.7 16.6 11.9 14.6 13.8Z" />
    </Svg>
  );
};
