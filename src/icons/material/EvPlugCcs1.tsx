import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EvPlugCcs1Icon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 20C7.5 20.8 6.8 21.5 6 21.5C5.2 21.5 4.5 20.8 4.5 20C4.5 19.2 5.2 18.5 6 18.5C6.8 18.5 7.5 19.2 7.5 20ZM18 18.5C17.2 18.5 16.5 19.2 16.5 20C16.5 20.8 17.2 21.5 18 21.5C18.8 21.5 19.5 20.8 19.5 20C19.5 19.2 18.8 18.5 18 18.5ZM22 20C22 22.2 20.2 24 18 24H6C3.8 24 2 22.2 2 20C2 17.8 3.8 16 6 16H6.3C4.3 14.4 3 11.8 3 9C3 4 7 0 12 0C17 0 21 4 21 9C21 11.8 19.7 14.4 17.7 16H18C20.2 16 22 17.8 22 20ZM12 16C15.9 16 19 12.9 19 9C19 5.1 15.9 2 12 2C8.1 2 5 5.1 5 9C5 12.9 8.1 16 12 16ZM20 20C20 18.9 19.1 18 18 18H6C4.9 18 4 18.9 4 20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20ZM12.9 6.3C12.9 5.3 13.7 4.5 14.7 4.5C15.7 4.5 16.5 5.3 16.5 6.3C16.5 7.3 15.7 8.1 14.7 8.1C13.7 8.1 12.9 7.3 12.9 6.3ZM7.5 6.3C7.5 5.3 8.3 4.5 9.3 4.5C10.3 4.5 11.1 5.3 11.1 6.3C11.1 7.3 10.3 8.1 9.3 8.1C8.3 8.1 7.5 7.3 7.5 6.3ZM9.3 10.2C9.3 10.8 8.8 11.3 8.2 11.3C7.6 11.3 7.1 10.8 7.1 10.2C7.1 9.6 7.5 9 8.1 9C8.8 9 9.3 9.6 9.3 10.2ZM13.8 12.7C13.8 13.7 13 14.5 12 14.5C11 14.5 10.2 13.7 10.2 12.7C10.2 11.7 11 10.9 12 10.9C13 10.9 13.8 11.7 13.8 12.7ZM17 10.2C17 10.8 16.5 11.3 15.9 11.3C15.3 11.3 14.8 10.8 14.8 10.2C14.8 9.6 15.2 9 15.9 9C16.5 9 17 9.6 17 10.2Z" />
    </Svg>
  );
};
