import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadCogIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 8.58C13.78 8.58 14.44 9.19 14.44 10C14.44 10.81 13.78 11.44 13 11.44C12.22 11.44 11.58 10.78 11.58 10C11.58 9.22 12.19 8.58 13 8.58ZM13 3C16.88 3 20 6.14 20 10C20 12.8 18.37 15.19 16 16.31V21H8.99996V18H7.99996C6.88996 18 5.99996 17.11 5.99996 16V13H4.49996C4.07996 13 3.83996 12.5 4.07996 12.19L5.99996 9.66C6.18996 5.95 9.22996 3 13 3ZM16 10C16 9.84 16 9.75 15.94 9.61L16.83 8.95C16.88 8.91 16.92 8.77 16.88 8.67L16.08 7.31C16.03 7.22 15.89 7.17 15.8 7.22L14.81 7.64C14.63 7.45 14.39 7.31 14.16 7.22L14 6.19C13.97 6.05 13.92 6 13.78 6H12.19C12.09 6 12 6.05 12 6.19L11.86 7.22C11.63 7.31 11.39 7.45 11.2 7.64L10.17 7.22C10.08 7.17 9.99996 7.22 9.93996 7.31L9.13996 8.67C9.08996 8.81 9.08996 8.91 9.18996 8.95L10.03 9.61C10.03 9.75 9.99996 9.89 9.99996 10C9.99996 10.13 10.03 10.27 10.03 10.41L9.18996 11.06C9.08996 11.11 9.08996 11.2 9.13996 11.3L9.93996 12.7C9.99996 12.8 10.08 12.8 10.17 12.8L11.16 12.37C11.39 12.56 11.58 12.66 11.86 12.75L12 13.83C12 13.92 12.09 14 12.19 14H13.78C13.92 14 13.97 13.92 14 13.83L14.16 12.75C14.39 12.66 14.63 12.56 14.81 12.38L15.8 12.8C15.89 12.8 16.03 12.8 16.08 12.7L16.88 11.3C16.92 11.2 16.88 11.11 16.83 11.06L16 10.41V10Z" />
    </Svg>
  );
};
