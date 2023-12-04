import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 13C9.65 13.59 9.36 14.24 9.19 14.93C6.5 15.16 3.9 16.42 3.9 17V18.1H9.2C9.37 18.78 9.65 19.42 10 20H2V17C2 14.34 7.33 13 10 13ZM10 4C11.0609 4 12.0783 4.42143 12.8284 5.17157C13.5786 5.92172 14 6.93913 14 8C14 8.91 13.69 9.75 13.18 10.43C12.32 10.75 11.55 11.26 10.91 11.9L10 12C8.93913 12 7.92172 11.5786 7.17157 10.8284C6.42143 10.0783 6 9.06087 6 8C6 6.93913 6.42143 5.92172 7.17157 5.17157C7.92172 4.42143 8.93913 4 10 4ZM10 5.9C9.44305 5.9 8.9089 6.12125 8.51508 6.51508C8.12125 6.9089 7.9 7.44305 7.9 8C7.9 8.55695 8.12125 9.0911 8.51508 9.48492C8.9089 9.87875 9.44305 10.1 10 10.1C10.557 10.1 11.0911 9.87875 11.4849 9.48492C11.8788 9.0911 12.1 8.55695 12.1 8C12.1 7.44305 11.8788 6.9089 11.4849 6.51508C11.0911 6.12125 10.557 5.9 10 5.9ZM15.5 12C18 12 20 14 20 16.5C20 17.38 19.75 18.21 19.31 18.9L22.39 22L21 23.39L17.88 20.32C17.19 20.75 16.37 21 15.5 21C13 21 11 19 11 16.5C11 14 13 12 15.5 12ZM15.5 14C14.837 14 14.2011 14.2634 13.7322 14.7322C13.2634 15.2011 13 15.837 13 16.5C13 17.163 13.2634 17.7989 13.7322 18.2678C14.2011 18.7366 14.837 19 15.5 19C16.163 19 16.7989 18.7366 17.2678 18.2678C17.7366 17.7989 18 17.163 18 16.5C18 15.837 17.7366 15.2011 17.2678 14.7322C16.7989 14.2634 16.163 14 15.5 14Z" />
    </Svg>
  );
};
