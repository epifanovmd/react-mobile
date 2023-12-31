import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrophyBrokenIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.2 13C6.6 14.8 7.6 16.3 10 16.8V19.34C8 20.12 8 22 8 22H13.2L10.2 15L14.2 10L10.7 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2ZM6 11H4V4H6V11ZM17.8 13H20C21 13 22 12 22 11V2H18C17.1 2 16 3 16 4H13.9L16.7 10L12.2 15L13.2 22H16C16 22 16 20.12 14 19.34V16.85C16.39 16.35 17.5 14.7 17.8 13ZM20 11H18V4H20V11Z" />
    </Svg>
  );
};
