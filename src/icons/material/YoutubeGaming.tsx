import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const YoutubeGamingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 13V8L17 5L12 8L7 5L2 8V13L12 19L22 13ZM9 11H7V13H6V11H4V10H6V8H7V10H9V11ZM15 13C14.45 13 14 12.55 14 12C14 11.45 14.45 11 15 11C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM18 11C17.45 11 17 10.55 17 10C17 9.45 17.45 9 18 9C18.55 9 19 9.45 19 10C19 10.55 18.55 11 18 11Z" />
    </Svg>
  );
};
