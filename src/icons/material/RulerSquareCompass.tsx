import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RulerSquareCompassIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.0001 19.88V22L18.2001 20.83L13.4101 11.83C14.0666 11.6243 14.6729 11.2836 15.1901 10.83L20.0001 19.88ZM15.0001 7C15.0001 7.79565 14.684 8.55871 14.1214 9.12132C13.5588 9.68393 12.7957 10 12.0001 10C11.8536 10.0099 11.7066 10.0099 11.5601 10L5.8001 20.83L4.0001 22V19.88L9.7901 9C9.40546 8.57 9.15296 8.03821 9.06287 7.46836C8.97278 6.8985 9.04891 6.31476 9.28215 5.78708C9.51538 5.25939 9.89583 4.81015 10.3779 4.49319C10.86 4.17623 11.4232 4.00499 12.0001 4V2C12.2653 2 12.5197 2.10536 12.7072 2.29289C12.8947 2.48043 13.0001 2.73478 13.0001 3V4.18C13.5836 4.38631 14.0891 4.76807 14.4472 5.27293C14.8052 5.7778 14.9984 6.38106 15.0001 7ZM13.0001 7C13.0001 6.80222 12.9414 6.60888 12.8316 6.44443C12.7217 6.27998 12.5655 6.15181 12.3828 6.07612C12.2001 6.00043 11.999 5.98063 11.805 6.01921C11.611 6.0578 11.4328 6.15304 11.293 6.29289C11.1531 6.43275 11.0579 6.61093 11.0193 6.80491C10.9807 6.99889 11.0005 7.19996 11.0762 7.38268C11.1519 7.56541 11.2801 7.72159 11.4445 7.83147C11.609 7.94135 11.8023 8 12.0001 8C12.2653 8 12.5197 7.89464 12.7072 7.70711C12.8947 7.51957 13.0001 7.26522 13.0001 7ZM4.2201 10L6.0001 11.8L4.5601 14.56L2.1001 12.1L4.2201 10ZM12.0001 17.76L10.5001 16.25L9.0001 19L12.0001 22L15.0001 19L13.5301 16.23L12.0001 17.76ZM19.7801 10L18.0001 11.8L19.5001 14.56L21.9001 12.1L19.7801 10Z" />
    </Svg>
  );
};
