import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.5 12C18 12 20 14 20 16.5C20 17.38 19.75 18.2 19.31 18.9L22.39 22L21 23.39L17.88 20.32C17.19 20.75 16.37 21 15.5 21C13 21 11 19 11 16.5C11 14 13 12 15.5 12ZM15.5 14C14.837 14 14.2011 14.2634 13.7322 14.7322C13.2634 15.2011 13 15.837 13 16.5C13 17.163 13.2634 17.7989 13.7322 18.2678C14.2011 18.7366 14.837 19 15.5 19C16.163 19 16.7989 18.7366 17.2678 18.2678C17.7366 17.7989 18 17.163 18 16.5C18 15.837 17.7366 15.2011 17.2678 14.7322C16.7989 14.2634 16.163 14 15.5 14ZM19.5 2C19.6326 2 19.7598 2.05268 19.8536 2.14645C19.9473 2.24021 20 2.36739 20 2.5V11.81C19.42 11.26 18.75 10.81 18 10.5V4.7L15 5.86V10C14.3 10.07 13.62 10.24 13 10.5V5.87L9 4.47V16.13V16.5C9 17.14 9.09 17.76 9.26 18.34L8 17.9L2.66 19.97L2.5 20C2.36739 20 2.24021 19.9473 2.14645 19.8536C2.05268 19.7598 2 19.6326 2 19.5V4.38C2 4.15 2.15 3.97 2.36 3.9L8 2L14 4.1L19.34 2.03L19.5 2ZM4 5.46V17.31L7 16.15V4.45L4 5.46Z" />
    </Svg>
  );
};
