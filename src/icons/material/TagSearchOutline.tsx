import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TagSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 13C22 13.53 21.79 14.04 21.41 14.41L21 14.83C20.91 11.97 18.84 9.62 16.11 9.11L11 4H4V11L9.11 16.11C9.62 18.84 11.97 20.91 14.83 21L14.41 21.41C14.04 21.79 13.53 22 13 22C12.47 22 11.97 21.79 11.59 21.42L2.59 12.42C2.21 12.04 2 11.53 2 11V4C2 2.9 2.9 2 4 2H11C11.53 2 12.04 2.21 12.41 2.58L21.41 11.58C21.79 11.96 22 12.47 22 13ZM5 6.5C5 7.33 5.67 8 6.5 8C7.33 8 8 7.33 8 6.5C8 5.67 7.33 5 6.5 5C5.67 5 5 5.67 5 6.5ZM15.11 10.61C12.61 10.61 10.61 12.61 10.61 15.11C10.61 17.61 12.61 19.61 15.11 19.61C16 19.61 16.8 19.36 17.5 18.93L20.61 22L22 20.61L18.92 17.5C19.36 16.82 19.61 16 19.61 15.11C19.61 12.61 17.61 10.61 15.11 10.61ZM15.11 12.61C16.5 12.61 17.61 13.73 17.61 15.11C17.61 16.49 16.5 17.61 15.11 17.61C13.72 17.61 12.61 16.5 12.61 15.11C12.61 13.72 13.73 12.61 15.11 12.61Z" />
    </Svg>
  );
};
