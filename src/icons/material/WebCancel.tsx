import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WebCancelIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.82 14H9.66C9.56 13.34 9.5 12.68 9.5 12C9.5 11.32 9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.5 14.46 13 14.4 13.46C15 12.96 15.72 12.57 16.5 12.32C16.5 12.21 16.5 12.11 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.06 20 12.12 20 12.18C20.7 12.35 21.35 12.63 21.95 13C22 12.68 22 12.34 22 12C22 6.5 17.5 2 12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12.34 22 12.68 22 13 21.95C12.59 21.29 12.29 20.55 12.13 19.75C12.09 19.82 12.05 19.89 12 19.96C11.17 18.76 10.5 17.43 10.09 16H12.5C12.81 15.25 13.26 14.58 13.82 14ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8ZM12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09C10.5 6.57 11.17 5.23 12 4.03ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57 18.93 6.03 17.65 5.08 16ZM8 8H5.08C6.03 6.34 7.57 5.06 9.4 4.44C8.8 5.55 8.35 6.75 8 8ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21.5C16.84 21.5 15.5 20.16 15.5 18.5C15.5 17.94 15.65 17.42 15.92 17L20 21.08C19.58 21.35 19.06 21.5 18.5 21.5ZM21.08 20L17 15.92C17.42 15.65 17.94 15.5 18.5 15.5C20.16 15.5 21.5 16.84 21.5 18.5C21.5 19.06 21.35 19.58 21.08 20Z" />
    </Svg>
  );
};
