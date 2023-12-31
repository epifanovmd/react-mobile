import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloudSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.5 12C18 12 20 14 20 16.5C20 17.38 19.75 18.21 19.31 18.9L22.39 22L21 23.39L17.88 20.32C17.19 20.75 16.37 21 15.5 21C13 21 11 19 11 16.5C11 14 13 12 15.5 12ZM15.5 14C14.837 14 14.2011 14.2634 13.7322 14.7322C13.2634 15.2011 13 15.837 13 16.5C13 17.163 13.2634 17.7989 13.7322 18.2678C14.2011 18.7366 14.837 19 15.5 19C16.163 19 16.7989 18.7366 17.2678 18.2678C17.7366 17.7989 18 17.163 18 16.5C18 15.837 17.7366 15.2011 17.2678 14.7322C16.7989 14.2634 16.163 14 15.5 14ZM22 13C22 12.2044 21.6839 11.4413 21.1213 10.8787C20.5587 10.3161 19.7956 10 19 10H17.5V9.5C17.5 8.04131 16.9205 6.64236 15.8891 5.61091C14.8576 4.57946 13.4587 4 12 4C9.5 4 7.37 5.69 6.71 8H6C4.93913 8 3.92172 8.42143 3.17157 9.17157C2.42143 9.92172 2 10.9391 2 12C2 13.0609 2.42143 14.0783 3.17157 14.8284C3.92172 15.5786 4.93913 16 6 16H9V16.5C9 17 9.06 17.5 9.17 18H6C4.4087 18 2.88258 17.3679 1.75736 16.2426C0.632141 15.1174 0 13.5913 0 12C0 8.9 2.34 6.36 5.35 6.04C6.6 3.64 9.11 2 12 2C15.64 2 18.67 4.59 19.36 8.04C21.95 8.22 24 10.36 24 13C24 14.65 23.21 16.1 22 17V16.5C22 15.77 21.88 15.06 21.65 14.4C21.87 14 22 13.5 22 13Z" />
    </Svg>
  );
};
