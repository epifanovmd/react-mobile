import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapClockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 12H16.5V16.25L19.36 17.94L18.61 19.16L15 17V12ZM23 16C23 17.8565 22.2625 19.637 20.9497 20.9497C19.637 22.2625 17.8565 23 16 23C13 23 10.4 21.08 9.42 18.4L8 17.9L2.66 19.97L2.5 20C2.36739 20 2.24021 19.9473 2.14645 19.8536C2.05268 19.7598 2 19.6326 2 19.5V4.38C2 4.15 2.15 3.97 2.36 3.9L8 2L14 4.1L19.34 2H19.5C19.6326 2 19.7598 2.05268 19.8536 2.14645C19.9473 2.24021 20 2.36739 20 2.5V10.25C21.81 11.5 23 13.62 23 16ZM9 16C9 12.83 11.11 10.15 14 9.29V6.11L8 4V15.89L9 16.24C9 16.16 9 16.08 9 16ZM16 11C14.6739 11 13.4021 11.5268 12.4645 12.4645C11.5268 13.4021 11 14.6739 11 16C11 17.3261 11.5268 18.5979 12.4645 19.5355C13.4021 20.4732 14.6739 21 16 21C17.3261 21 18.5979 20.4732 19.5355 19.5355C20.4732 18.5979 21 17.3261 21 16C21 14.6739 20.4732 13.4021 19.5355 12.4645C18.5979 11.5268 17.3261 11 16 11Z" />
    </Svg>
  );
};
