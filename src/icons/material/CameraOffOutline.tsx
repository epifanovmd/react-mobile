import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.0001 12C17.0001 12.54 16.9001 13.05 16.7401 13.54L15.0001 11.78C14.8701 10.3 13.7001 9.12998 12.2201 8.99998L10.4601 7.25998C10.9501 7.09998 11.4601 6.99998 12.0001 6.99998C14.7601 6.99998 17.0001 9.23998 17.0001 12ZM9.88011 3.99998H14.1201L15.9501 5.99998H20.0001V16.8L21.8801 18.68C21.9601 18.47 22.0001 18.24 22.0001 18V5.99998C22.0001 4.88998 21.1101 3.99998 20.0001 3.99998H16.8301L15.0001 1.99998H9.00011L7.18011 3.99998L8.60011 5.39998L9.88011 3.99998ZM22.1101 21.46L20.8401 22.73L18.1101 20H4.00011C2.90011 20 2.00011 19.11 2.00011 18V5.99998C2.00011 5.41998 2.25011 4.89998 2.65011 4.53998L1.11011 2.99998L2.39011 1.72998L22.1101 21.46ZM9.00011 12C9.00011 13.66 10.3401 15 12.0001 15C12.3301 15 12.6501 14.93 12.9401 14.83L9.17011 11.06C9.07011 11.36 9.00011 11.67 9.00011 12ZM16.1101 18L14.4501 16.34C13.7201 16.75 12.8901 17 12.0001 17C9.24011 17 7.00011 14.76 7.00011 12C7.00011 11.11 7.25011 10.28 7.66011 9.54998L4.11011 5.99998H4.00011V18H16.1101Z" />
    </Svg>
  );
};
