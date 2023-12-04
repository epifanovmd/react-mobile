import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WordpressIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.42 12C3.42 10.76 3.69 9.58 4.16 8.5L8.26 19.72C5.39 18.33 3.42 15.4 3.42 12ZM17.79 11.57C17.79 12.3 17.5 13.15 17.14 14.34L16.28 17.2L13.18 8L14.16 7.9C14.63 7.84 14.57 7.16 14.11 7.19C14.11 7.19 12.72 7.3 11.82 7.3L9.56 7.19C9.1 7.16 9.05 7.87 9.5 7.9L10.41 8L11.75 11.64L9.87 17.27L6.74 8L7.73 7.9C8.19 7.84 8.13 7.16 7.67 7.19C7.67 7.19 6.28 7.3 5.38 7.3L4.83 7.29C6.37 4.96 9 3.42 12 3.42C14.23 3.42 16.27 4.28 17.79 5.67H17.68C16.84 5.67 16.24 6.4 16.24 7.19C16.24 7.9 16.65 8.5 17.08 9.2C17.41 9.77 17.79 10.5 17.79 11.57ZM12.15 12.75L14.79 19.97L14.85 20.09C13.96 20.41 13 20.58 12 20.58C11.16 20.58 10.35 20.46 9.58 20.23L12.15 12.75ZM19.53 7.88C20.2 9.11 20.58 10.5 20.58 12C20.58 15.16 18.86 17.93 16.31 19.41L18.93 11.84C19.42 10.62 19.59 9.64 19.59 8.77L19.53 7.88ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12 21.54C17.26 21.54 21.54 17.26 21.54 12C21.54 6.74 17.26 2.46 12 2.46C6.74 2.46 2.46 6.74 2.46 12C2.46 17.26 6.74 21.54 12 21.54Z" />
    </Svg>
  );
};
