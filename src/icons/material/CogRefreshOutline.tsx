import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CogRefreshOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 14.5C19.1 14.5 20.1 14.9 20.8 15.7L22 14.5V18.5H18L19.8 16.7C19.3 16.3 18.7 16 18 16C16.6 16 15.5 17.1 15.5 18.5C15.5 19.9 16.6 21 18 21C18.8 21 19.5 20.6 20 20H21.7C21.1 21.5 19.7 22.5 18 22.5C15.8 22.5 14 20.7 14 18.5C14 16.3 15.8 14.5 18 14.5ZM11.7 20H11.3L10.9 17.4C9.69997 17.2 8.69997 16.5 7.89997 15.6L5.49997 16.6L4.69997 15.3L6.79997 13.7C6.39997 12.5 6.39997 11.3 6.79997 10.1L4.69997 8.7L5.49997 7.4L7.89997 8.4C8.69997 7.5 9.69997 6.9 10.9 6.6L11.2 4H12.7L13.1 6.6C14.3 6.8 15.4 7.5 16.1 8.4L18.5 7.4L19.3 8.7L17.2 10.2C17.4 10.8 17.5 11.4 17.5 12H18C18.5 12 19 12.1 19.5 12.2V12L19.4 11L21.5 9.4C21.7 9.2 21.7 9 21.6 8.8L19.6 5.3C19.5 5 19.3 5 19 5L16.5 6C16 5.6 15.4 5.3 14.8 5L14.4 2.3C14.5 2.2 14.2 2 14 2H9.99997C9.79997 2 9.49997 2.2 9.49997 2.4L9.09997 5.1C8.49997 5.3 7.99997 5.7 7.39997 6L4.99997 5C4.69997 5 4.49997 5 4.29997 5.3L2.29997 8.8C2.19997 9 2.29997 9.2 2.49997 9.4L4.59997 11L4.49997 12L4.59997 13L2.49997 14.7C2.29997 14.9 2.29997 15.1 2.39997 15.3L4.39997 18.8C4.49997 19 4.69997 19 4.99997 19L7.49997 18C7.99997 18.4 8.59997 18.7 9.19997 19L9.59997 21.7C9.59997 21.9 9.79997 22.1 10.1 22.1H12.6C12.1 21.4 11.9 20.7 11.7 20ZM16 12.3V12C16 9.8 14.2 8 12 8C9.79997 8 7.99997 9.8 7.99997 12C7.99997 14.2 9.79997 16 12 16C12.7 14.3 14.2 12.9 16 12.3ZM9.99997 12C9.99997 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 9.99997 13.1 9.99997 12Z" />
    </Svg>
  );
};
