import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NinjaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.75 13C7.74 12.65 7.9 12.31 8.17 12.08C8.92 12.24 9.62 12.55 10.25 13C10.25 13.68 9.69 14.24 9 14.24C8.31 14.24 7.76 13.69 7.75 13ZM13.75 13C14.38 12.56 15.08 12.25 15.83 12.09C16.1 12.32 16.26 12.66 16.25 13C16.25 13.7 15.69 14.26 15 14.26C14.31 14.26 13.75 13.7 13.75 13ZM12 9C9.23 8.96 6.5 9.65 4.07 11L4 12C4 13.23 4.29 14.44 4.84 15.54C7.21 15.18 9.6 15 12 15C14.4 15 16.79 15.18 19.16 15.54C19.71 14.44 20 13.23 20 12L19.93 11C17.5 9.65 14.77 8.96 12 9ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z" />
    </Svg>
  );
};
