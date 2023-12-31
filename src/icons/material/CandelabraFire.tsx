import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CandelabraFireIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 7C18.83 7 19.5 6.33 19.5 5.5C19.5 4.67 18.83 3 18 3C17.17 3 16.5 4.67 16.5 5.5C16.5 6.33 17.17 7 18 7ZM18 5.25C18.28 5.25 18.5 5.47 18.5 5.75C18.5 6.03 18.28 6.25 18 6.25C17.72 6.25 17.5 6.03 17.5 5.75C17.5 5.47 17.72 5.25 18 5.25ZM12 6C12.83 6 13.5 5.33 13.5 4.5C13.5 3.67 12.83 2 12 2C11.17 2 10.5 3.67 10.5 4.5C10.5 5.33 11.17 6 12 6ZM12 4.25C12.28 4.25 12.5 4.47 12.5 4.75C12.5 5.03 12.28 5.25 12 5.25C11.72 5.25 11.5 5.03 11.5 4.75C11.5 4.47 11.72 4.25 12 4.25ZM6 7C6.83 7 7.5 6.33 7.5 5.5C7.5 4.67 6.83 3 6 3C5.17 3 4.5 4.67 4.5 5.5C4.5 6.33 5.17 7 6 7ZM6 5.25C6.28 5.25 6.5 5.47 6.5 5.75C6.5 6.03 6.28 6.25 6 6.25C5.72 6.25 5.5 6.03 5.5 5.75C5.5 5.47 5.72 5.25 6 5.25ZM20.5 11C20.5 11.55 20.05 12 19.5 12H19V14C19 15.11 18.11 16 17 16H13V20H14C15.11 20 16 20.9 16 22H8C8 20.9 8.9 20 10 20H11V16H7C5.9 16 5 15.11 5 14V12H4.5C3.95 12 3.5 11.55 3.5 11C3.5 10.45 3.95 10 4.5 10V9C4.5 8.45 4.95 8 5.5 8H6.5C7.05 8 7.5 8.45 7.5 9V10C8.05 10 8.5 10.45 8.5 11C8.5 11.55 8.05 12 7.5 12H7V14H11V12H10.5C9.95 12 9.5 11.55 9.5 11C9.5 10.45 9.95 10 10.5 10V8C10.5 7.45 10.95 7 11.5 7H12.5C13.05 7 13.5 7.45 13.5 8V10C14.05 10 14.5 10.45 14.5 11C14.5 11.55 14.05 12 13.5 12H13V14H17V12H16.5C15.95 12 15.5 11.55 15.5 11C15.5 10.45 15.95 10 16.5 10V9C16.5 8.45 16.95 8 17.5 8H18.5C19.05 8 19.5 8.45 19.5 9V10C20.05 10 20.5 10.45 20.5 11Z" />
    </Svg>
  );
};
