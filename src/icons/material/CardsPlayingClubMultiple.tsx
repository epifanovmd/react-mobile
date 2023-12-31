import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsPlayingClubMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3ZM19 0H9C7.9 0 7 0.9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 0.9 20.1 0 19 0ZM16 13C15.4 13 14.9 12.7 14.5 12.3L15.5 15H12.5L13.5 12.3C13.1 12.7 12.6 13 12 13C10.9 13 10 12.1 10 11C10 9.9 10.9 9 12 9H12.3C12.1 8.7 12 8.4 12 8C12 6.9 12.9 6 14 6C15.1 6 16 6.9 16 8C16 8.4 15.9 8.7 15.7 9H16C17.1 9 18 9.9 18 11C18 12.1 17.1 13 16 13Z" />
    </Svg>
  );
};
