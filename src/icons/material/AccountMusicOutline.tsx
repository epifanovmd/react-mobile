import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountMusicOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4ZM11 6C10.4696 6 9.96086 6.21071 9.58579 6.58579C9.21071 6.96086 9 7.46957 9 8C9 8.53043 9.21071 9.03914 9.58579 9.41421C9.96086 9.78929 10.4696 10 11 10C11.5304 10 12.0391 9.78929 12.4142 9.41421C12.7893 9.03914 13 8.53043 13 8C13 7.46957 12.7893 6.96086 12.4142 6.58579C12.0391 6.21071 11.5304 6 11 6ZM11 13C12.1 13 13.66 13.23 15.11 13.69C14.5 14.07 14 14.6 13.61 15.23C12.79 15.03 11.89 14.9 11 14.9C8.03 14.9 4.9 16.36 4.9 17V18.1H13.04C13.13 18.8 13.38 19.44 13.76 20H3V17C3 14.34 8.33 13 11 13ZM18.5 10H20H22V12H20V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20C16.837 20 16.2011 19.7366 15.7322 19.2678C15.2634 18.7989 15 18.163 15 17.5C15 16.837 15.2634 16.2011 15.7322 15.7322C16.2011 15.2634 16.837 15 17.5 15C17.86 15 18.19 15.07 18.5 15.21V10Z" />
    </Svg>
  );
};
