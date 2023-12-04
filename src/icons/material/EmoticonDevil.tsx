import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonDevilIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.5 2.09C21.6 3 20.13 3.73 18.31 4.25C16.59 2.84 14.39 2 12 2C9.61 2 7.41 2.84 5.69 4.25C3.87 3.73 2.4 3 1.5 2.09C1.53 3.72 2.35 5.21 3.72 6.4C2.63 8 2 9.92 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.92 21.37 8 20.28 6.4C21.65 5.21 22.47 3.72 22.5 2.09ZM7.5 8.5L10.5 10C10.5 10.8 9.8 11.5 9 11.5C8.2 11.5 7.5 10.8 7.5 10V8.5ZM12 17.23C10.25 17.23 8.71 16.5 7.81 15.42L9.23 14C9.68 14.72 10.75 15.23 12 15.23C13.25 15.23 14.32 14.72 14.77 14L16.19 15.42C15.29 16.5 13.75 17.23 12 17.23ZM16.5 10C16.5 10.8 15.8 11.5 15 11.5C14.2 11.5 13.5 10.8 13.5 10L16.5 8.5V10Z" />
    </Svg>
  );
};
