import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneDialIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.6 10.8C8 13.6 10.4 15.9 13.2 17.4L15.4 15.2C15.7 14.9 16.1 14.8 16.4 15C17.5 15.4 18.7 15.6 20 15.6C20.6 15.6 21 16 21 16.6V20C21 20.6 20.6 21 20 21C10.6 21 3 13.4 3 4C3 3.4 3.5 3 4 3H7.5C8.1 3 8.5 3.4 8.5 4C8.5 5.2 8.7 6.4 9.1 7.6C9.2 7.9 9.1 8.3 8.9 8.6L6.6 10.8ZM14 3C13.4 3 13 3.4 13 4C13 4.6 13.4 5 14 5C14.6 5 15 4.6 15 4C15 3.4 14.6 3 14 3ZM17 3C16.4 3 16 3.4 16 4C16 4.6 16.4 5 17 5C17.6 5 18 4.6 18 4C18 3.4 17.6 3 17 3ZM20 3C19.4 3 19 3.4 19 4C19 4.6 19.4 5 20 5C20.6 5 21 4.6 21 4C21 3.4 20.6 3 20 3ZM14 6C13.4 6 13 6.4 13 7C13 7.6 13.4 8 14 8C14.6 8 15 7.6 15 7C15 6.4 14.6 6 14 6ZM17 6C16.4 6 16 6.4 16 7C16 7.6 16.4 8 17 8C17.6 8 18 7.6 18 7C18 6.4 17.6 6 17 6ZM20 6C19.4 6 19 6.4 19 7C19 7.6 19.4 8 20 8C20.6 8 21 7.6 21 7C21 6.4 20.6 6 20 6ZM14 9C13.4 9 13 9.4 13 10C13 10.6 13.4 11 14 11C14.6 11 15 10.6 15 10C15 9.4 14.6 9 14 9ZM17 9C16.4 9 16 9.4 16 10C16 10.6 16.4 11 17 11C17.6 11 18 10.6 18 10C18 9.4 17.6 9 17 9ZM20 9C19.4 9 19 9.4 19 10C19 10.6 19.4 11 20 11C20.6 11 21 10.6 21 10C21 9.4 20.6 9 20 9Z" />
    </Svg>
  );
};
