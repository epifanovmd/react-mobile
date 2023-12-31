import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarrotIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 10L15.8 11H13.5C13.3674 11 13.2402 11.0527 13.1464 11.1464C13.0527 11.2402 13 11.3674 13 11.5C13 11.6326 13.0527 11.7598 13.1464 11.8536C13.2402 11.9473 13.3674 12 13.5 12H15.6L14.6 17H12.5C12.3674 17 12.2402 17.0527 12.1464 17.1464C12.0527 17.2402 12 17.3674 12 17.5C12 17.6326 12.0527 17.7598 12.1464 17.8536C12.2402 17.9473 12.3674 18 12.5 18H14.4L14 20C14 20.5304 13.7893 21.0391 13.4142 21.4142C13.0391 21.7893 12.5304 22 12 22C11.4696 22 10.9609 21.7893 10.5858 21.4142C10.2107 21.0391 10 20.5304 10 20L9 15H10.5C10.6326 15 10.7598 14.9473 10.8536 14.8536C10.9473 14.7598 11 14.6326 11 14.5C11 14.3674 10.9473 14.2402 10.8536 14.1464C10.7598 14.0527 10.6326 14 10.5 14H8.8L8 10C8 8.8 8.93 7.77 10.29 7.29L8.9 5.28C8.59 4.82 8.7 4.2 9.16 3.89C9.61 3.57 10.23 3.69 10.55 4.14L11 4.8V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V5.28L14.5 3.54C14.83 3.12 15.47 3.07 15.89 3.43C16.31 3.78 16.36 4.41 16 4.84L13.87 7.35C15.14 7.85 16 8.85 16 10Z" />
    </Svg>
  );
};
