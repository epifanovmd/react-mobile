import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MonitorSpeakerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 20V18H3C1.9 18 1 17.1 1 16V4C1 2.89 1.89 2 3 2H21C22.1 2 23 2.89 23 4V8H21V4H3V16H12V22H8V20H10ZM18.5 15C17.12 15 16 16.12 16 17.5C16 18.88 17.12 20 18.5 20C19.88 20 21 18.88 21 17.5C21 16.12 19.88 15 18.5 15ZM23 10V21C23 21.55 22.55 22 22 22H15C14.45 22 14 21.55 14 21V10C14 9.45 14.45 9 15 9H22C22.55 9 23 9.45 23 10ZM17 11.5C17 12.33 17.67 13 18.5 13C19.33 13 20 12.33 20 11.5C20 10.67 19.33 10 18.5 10C17.67 10 17 10.67 17 11.5ZM22 17.5C22 15.57 20.43 14 18.5 14C16.57 14 15 15.57 15 17.5C15 19.43 16.57 21 18.5 21C20.43 21 22 19.43 22 17.5Z" />
    </Svg>
  );
};
