import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UnrealIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12ZM5.24 18.76C3.43 16.95 2.44 14.55 2.44 12C2.44 9.45 3.43 7.05 5.24 5.24C7.05 3.43 9.45 2.44 12 2.44C14.55 2.44 16.95 3.43 18.76 5.24C20.57 7.05 21.56 9.45 21.56 12C21.56 14.55 20.57 16.95 18.76 18.76C16.95 20.57 14.55 21.56 12 21.56C9.45 21.56 7.05 20.57 5.24 18.76ZM6.35 9.5C4.34 11.79 4.73 13.68 4.73 13.68C4.73 13.68 5.28 12.38 6.61 11C7.25 10.37 7.72 10.15 8.04 10.15C8.4 10.15 8.57 10.41 8.57 10.65V15.29C8.57 15.75 8.27 15.85 8 15.84C7.77 15.84 7.55 15.76 7.55 15.76C8.92 17.73 12.19 18 12.19 18L13.63 16.5H13.67L15 17.63C17.39 16.21 18.55 13.58 18.55 13.58C17.5 14.7 16.79 14.97 16.39 14.96C16.03 14.96 15.88 14.75 15.88 14.75C15.87 14.65 15.82 8.9 15.89 8.9C16.31 8.13 17.63 6.56 17.63 6.56C15.16 7.05 13.81 8.66 13.81 8.66C13.41 8.35 12.59 8.4 12.59 8.4C12.97 8.61 13.35 9.21 13.35 9.72V14.65C13.35 14.65 12.5 15.38 11.88 15.38C11.5 15.38 11.27 15.17 11.14 15C11.05 14.88 11 14.79 11 14.79V8.69C10.93 8.75 10.82 8.8 10.71 8.8C10.57 8.79 10.43 8.73 10.34 8.53C10.26 8.38 10.22 8.15 10.22 7.83C10.22 6.7 11.5 5.96 11.5 5.96C9.87 6.39 8.36 7.22 6.35 9.5Z" />
    </Svg>
  );
};
