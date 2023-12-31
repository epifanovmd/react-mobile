import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CornIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 12H8.82C9.62 12.5 10.35 13.07 11 13.68V12ZM7 11C7.27 5.88 9.37 2 12 2C14.66 2 16.77 5.94 17 11.12C18.5 10.43 20.17 10 22 10C16.25 12.57 18.25 22 12 22C6 22 7.93 12.57 2 10C3.82 10 5.5 10.4 7 11ZM11 11V9H8.24L8.03 11H11ZM11 8V6H9.05C8.8 6.6 8.6 7.27 8.43 8H11ZM11 5V3.3C10.45 3.63 9.95 4.22 9.5 5H11ZM12 3V5H13V6H12V8H14V9H12V11H15V12H12V14H14V15H12.23C13.42 16.45 14.15 18 14.32 19.23C15.31 17.56 15.96 14.84 16 11.76C15.94 7 14.13 3 12 3Z" />
    </Svg>
  );
};
