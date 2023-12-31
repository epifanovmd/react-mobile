import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloudSearchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.5 12C18 12 20 14 20 16.5C20 17.38 19.75 18.21 19.31 18.9L22.39 22L21 23.39L17.88 20.32C17.19 20.75 16.37 21 15.5 21C13 21 11 19 11 16.5C11 14 13 12 15.5 12ZM15.5 14C14.837 14 14.2011 14.2634 13.7322 14.7322C13.2634 15.2011 13 15.837 13 16.5C13 17.163 13.2634 17.7989 13.7322 18.2678C14.2011 18.7366 14.837 19 15.5 19C16.163 19 16.7989 18.7366 17.2678 18.2678C17.7366 17.7989 18 17.163 18 16.5C18 15.837 17.7366 15.2011 17.2678 14.7322C16.7989 14.2634 16.163 14 15.5 14ZM19.35 8.03C21.95 8.22 24 10.36 24 13C24 14.64 23.21 16.1 22 17V16.5C22 15.6464 21.8319 14.8012 21.5052 14.0126C21.1786 13.2239 20.6998 12.5074 20.0962 11.9038C19.4926 11.3002 18.7761 10.8214 17.9874 10.4948C17.1988 10.1681 16.3536 10 15.5 10C13.7761 10 12.1228 10.6848 10.9038 11.9038C9.68482 13.1228 9 14.7761 9 16.5C9 17 9.06 17.5 9.17 18H6C4.4087 18 2.88258 17.3679 1.75736 16.2426C0.632141 15.1174 0 13.5913 0 12C0 8.9 2.34 6.36 5.35 6.03C6.6 3.64 9.11 2 12 2C15.64 2 18.67 4.59 19.35 8.03Z" />
    </Svg>
  );
};
