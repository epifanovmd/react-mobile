import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountCheckOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.1 12.5L22.5 13.91L15.97 20.5L12.5 17L13.9 15.59L15.97 17.67L21.1 12.5ZM11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4ZM11 6C10.4696 6 9.96086 6.21071 9.58579 6.58579C9.21071 6.96086 9 7.46957 9 8C9 8.53043 9.21071 9.03914 9.58579 9.41421C9.96086 9.78929 10.4696 10 11 10C11.5304 10 12.0391 9.78929 12.4142 9.41421C12.7893 9.03914 13 8.53043 13 8C13 7.46957 12.7893 6.96086 12.4142 6.58579C12.0391 6.21071 11.5304 6 11 6ZM11 13C11.68 13 12.5 13.09 13.41 13.26L11.74 14.93L11 14.9C8.03 14.9 4.9 16.36 4.9 17V18.1H11.1L13 20H3V17C3 14.34 8.33 13 11 13Z" />
    </Svg>
  );
};
