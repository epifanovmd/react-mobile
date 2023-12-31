import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContactlessPaymentCircleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM8.43 14.44L7.07 13.83C7.35 13.27 7.5 12.67 7.5 12.05C7.5 11.39 7.35 10.76 7.07 10.17L8.43 9.56C8.81 10.37 9 11.2 9 12.05C9 12.8 8.81 13.6 8.43 14.44ZM11.53 15.94L10.22 15.29C10.75 14.16 11 13 11 11.86C11 10.73 10.75 9.69 10.22 8.71L11.53 7.96C12.19 9.12 12.5 10.42 12.5 11.86C12.5 13.33 12.19 14.69 11.53 15.94ZM14.68 17.35L13.31 16.65C14.1 15.11 14.5 13.57 14.5 12C14.5 10.43 14.1 8.87 13.31 7.31L14.68 6.65C15.55 8.43 16 10.22 16 12C16 13.82 15.55 15.6 14.68 17.35Z" />
    </Svg>
  );
};
