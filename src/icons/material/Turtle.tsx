import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TurtleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.47 5.9507C8.95 5.6707 9.47 5.4407 10 5.2807V4.0007C10 2.9007 10.87 2.0007 11.97 1.9707C13.13 2.0007 14 2.9007 14 4.0007V5.2807C14.53 5.4507 15.05 5.6707 15.53 5.9507L13.93 8.0707H10.07L8.47 5.9507ZM19 12.0007C19 12.5007 18.95 12.9507 18.86 13.4007L16.33 12.6207L15.14 8.9607L16.74 6.8507C17.17 7.2507 17.55 7.7007 17.88 8.2007C18.67 8.1307 19.43 8.2507 20.11 8.5907C21.14 9.1207 21.84 10.1307 22 11.2807L19 11.6407C19 11.7607 19 11.8807 19 12.0007ZM5 12.0007C5 11.8807 5 11.7607 5 11.6507L2 11.2807C2.16 10.1307 2.86 9.1207 3.89 8.5907C4.57 8.2507 5.34 8.1307 6.08 8.2607C6.41 7.7507 6.79 7.2807 7.24 6.8707L8.86 8.9507L7.67 12.6207L5.14 13.4007C5.05 12.9507 5 12.5007 5 12.0007ZM10.24 9.5707H13.76L14.85 12.9307L12 15.0007L9.15 12.9307L10.24 9.5707ZM8.13 14.0507L11.25 16.3107V18.9607C10.68 18.9007 10.13 18.7707 9.62 18.5807L8.39 21.3407C7.33 20.8707 6.57 19.9007 6.37 18.7607C6.23 18.0007 6.35 17.2407 6.69 16.5607C6.24 16.0407 5.87 15.4607 5.59 14.8207L8.13 14.0507ZM15.87 14.0507L18.41 14.8207C18.13 15.4607 17.76 16.0407 17.31 16.5607C17.65 17.2407 17.77 18.0007 17.64 18.7607C17.43 19.9007 16.67 20.8707 15.61 21.3407L14.39 18.5807C13.86 18.7707 13.33 18.9407 12.75 19.0007V16.3107L15.87 14.0507Z" />
    </Svg>
  );
};
