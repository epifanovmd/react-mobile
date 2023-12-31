import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonDevilOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.5 2.09C2.4 3 3.87 3.73 5.69 4.25C7.41 2.84 9.61 2 12 2C14.39 2 16.59 2.84 18.31 4.25C20.13 3.73 21.6 3 22.5 2.09C22.47 3.72 21.65 5.21 20.28 6.4C21.37 8 22 9.92 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.92 2.63 8 3.72 6.4C2.35 5.21 1.53 3.72 1.5 2.09ZM20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12ZM10.5 10C10.5 10.8 9.8 11.5 9 11.5C8.2 11.5 7.5 10.8 7.5 10V8.5L10.5 10ZM16.5 10C16.5 10.8 15.8 11.5 15 11.5C14.2 11.5 13.5 10.8 13.5 10L16.5 8.5V10ZM12 17.23C10.25 17.23 8.71 16.5 7.81 15.42L9.23 14C9.68 14.72 10.75 15.23 12 15.23C13.25 15.23 14.32 14.72 14.77 14L16.19 15.42C15.29 16.5 13.75 17.23 12 17.23Z" />
    </Svg>
  );
};
