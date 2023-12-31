import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlowerPollenIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.4 12.75C18.4 11.37 17.28 10.25 15.9 10.25C15.37 10.25 14.88 10.41 14.5 10.69V10.5C14.5 9.12 13.38 8 12 8C10.62 8 9.5 9.12 9.5 10.5V10.69C9.12 10.41 8.63 10.25 8.1 10.25C6.72 10.25 5.6 11.37 5.6 12.75C5.6 13.74 6.19 14.6 7.03 15C6.19 15.4 5.6 16.25 5.6 17.25C5.6 18.63 6.72 19.75 8.1 19.75C8.63 19.75 9.12 19.58 9.5 19.31V19.5C9.5 20.88 10.62 22 12 22C13.38 22 14.5 20.88 14.5 19.5V19.31C14.88 19.58 15.37 19.75 15.9 19.75C17.28 19.75 18.4 18.63 18.4 17.25C18.4 16.25 17.81 15.4 16.97 15C17.81 14.6 18.4 13.74 18.4 12.75ZM12 17.5C10.62 17.5 9.5 16.38 9.5 15C9.5 13.62 10.62 12.5 12 12.5C13.38 12.5 14.5 13.62 14.5 15C14.5 16.38 13.38 17.5 12 17.5ZM11 6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6C13 6.55 12.55 7 12 7C11.45 7 11 6.55 11 6ZM7 8C7 7.45 7.45 7 8 7C8.55 7 9 7.45 9 8C9 8.55 8.55 9 8 9C7.45 9 7 8.55 7 8ZM5 6C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4C5.55 4 6 4.45 6 5C6 5.55 5.55 6 5 6ZM8 3C8 2.45 8.45 2 9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3ZM14 3C14 2.45 14.45 2 15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3ZM20 5C20 5.55 19.55 6 19 6C18.45 6 18 5.55 18 5C18 4.45 18.45 4 19 4C19.55 4 20 4.45 20 5ZM16 7C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9C15.45 9 15 8.55 15 8C15 7.45 15.45 7 16 7Z" />
    </Svg>
  );
};
