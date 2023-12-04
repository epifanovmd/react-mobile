import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsPlayingClubOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 20H7V4H17V20ZM12 8C10.9 8 10 8.9 10 10C10 10.4 10.1 10.7 10.3 11H10C8.9 11 8 11.9 8 13C8 14.1 8.9 15 10 15C10.6 15 11.1 14.7 11.5 14.3L10.5 17H13.5L12.5 14.3C12.9 14.7 13.4 15 14 15C15.1 15 16 14.1 16 13C16 11.9 15.1 11 14 11H13.7C13.9 10.7 14 10.3 14 10C14 8.9 13.1 8 12 8Z" />
    </Svg>
  );
};
