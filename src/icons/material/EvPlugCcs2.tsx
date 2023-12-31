import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EvPlugCcs2Icon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 19C7.5 19.8 6.8 20.5 6 20.5C5.2 20.5 4.5 19.8 4.5 19C4.5 18.2 5.2 17.5 6 17.5C6.8 17.5 7.5 18.2 7.5 19ZM18 17.5C17.2 17.5 16.5 18.2 16.5 19C16.5 19.8 17.2 20.5 18 20.5C18.8 20.5 19.5 19.8 19.5 19C19.5 18.2 18.8 17.5 18 17.5ZM18 15H17.7C19.7 13.4 21 10.8 21 8C21 5.2 19.7 2.6 17.7 1H6.3C4.3 2.6 3 5.2 3 8C3 10.8 4.3 13.4 6.3 15H6C3.8 15 2 16.8 2 19C2 21.2 3.8 23 6 23H18C20.2 23 22 21.2 22 19C22 16.8 20.2 15 18 15ZM5 8C5 6.1 5.8 4.3 7.1 3H16.9C18.2 4.3 19 6.1 19 8C19 11.9 15.9 15 12 15C8.1 15 5 11.9 5 8ZM18 21H6C4.9 21 4 20.1 4 19C4 17.9 4.9 17 6 17H18C19.1 17 20 17.9 20 19C20 20.1 19.1 21 18 21ZM12.9 5.3C12.9 6 13.5 6.6 14.2 6.6C14.9 6.6 15.5 6 15.5 5.3C15.5 4.6 14.9 4 14.1 4C13.4 4 12.9 4.6 12.9 5.3ZM8.6 5.3C8.6 6 9.2 6.6 9.9 6.6C10.6 6.6 11.2 6 11.2 5.3C11.2 4.6 10.6 4 9.9 4C9.1 4 8.6 4.6 8.6 5.3ZM7.7 10C8.7 10 9.4 9.2 9.4 8.3C9.4 7.4 8.6 6.6 7.7 6.6C6.8 6.6 6 7.3 6 8.3C6 9.2 6.8 10 7.7 10ZM11.6 11.7C11.6 10.8 10.8 10 9.9 10C8.9 10 8.2 10.8 8.2 11.7C8.2 12.7 9 13.4 9.9 13.4C10.8 13.4 11.6 12.7 11.6 11.7ZM12 10C13 10 13.7 9.2 13.7 8.3C13.7 7.4 12.9 6.6 12 6.6C11.1 6.6 10.3 7.4 10.3 8.3C10.3 9.2 11.1 10 12 10ZM15.9 11.7C15.9 10.8 15.1 10 14.2 10C13.2 10 12.5 10.8 12.5 11.7C12.5 12.7 13.3 13.4 14.2 13.4C15.1 13.4 15.9 12.7 15.9 11.7ZM18 8.3C18 7.4 17.2 6.6 16.3 6.6C15.3 6.6 14.6 7.4 14.6 8.3C14.6 9.3 15.4 10 16.3 10C17.2 10 18 9.2 18 8.3Z" />
    </Svg>
  );
};
