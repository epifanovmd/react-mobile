import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CogPauseOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.54 22H9.99996C9.74996 22 9.53996 21.82 9.49996 21.58L9.12996 18.93C8.49996 18.68 7.95996 18.34 7.43996 17.94L4.94996 18.95C4.72996 19.03 4.45996 18.95 4.33996 18.73L2.33996 15.27C2.20996 15.05 2.26996 14.78 2.45996 14.63L4.56996 12.97L4.49996 12L4.56996 11L2.45996 9.37C2.26996 9.22 2.20996 8.95 2.33996 8.73L4.33996 5.27C4.45996 5.05 4.72996 4.96 4.94996 5.05L7.43996 6.05C7.95996 5.66 8.49996 5.32 9.12996 5.07L9.49996 2.42C9.53996 2.18 9.74996 2 9.99996 2H14C14.25 2 14.46 2.18 14.5 2.42L14.87 5.07C15.5 5.32 16.04 5.66 16.56 6.05L19.05 5.05C19.27 4.96 19.54 5.05 19.66 5.27L21.66 8.73C21.79 8.95 21.73 9.22 21.54 9.37L19.43 11L19.5 12V12.19C19 12.07 18.5 12 18 12C17.83 12 17.66 12 17.5 12.03C17.5 11.41 17.4 10.79 17.2 10.2L19.31 8.65L18.56 7.35L16.15 8.39C15.38 7.5 14.32 6.86 13.12 6.62L12.75 4H11.25L10.88 6.61C9.67996 6.86 8.61996 7.5 7.84996 8.39L5.43996 7.35L4.68996 8.65L6.79996 10.2C6.39996 11.37 6.39996 12.64 6.79996 13.8L4.67996 15.36L5.42996 16.66L7.85996 15.62C8.62996 16.5 9.67996 17.14 10.87 17.38L11.24 20H12.35C12.61 20.75 13 21.42 13.54 22ZM12.36 15.96C12.24 16 12.12 16 12 16C9.78996 16 7.99996 14.21 7.99996 12C7.99996 9.79 9.78996 8 12 8C14.21 8 16 9.79 16 12C16 12.12 16 12.24 15.96 12.36C14.29 12.97 12.97 14.29 12.36 15.96ZM14 12C14 10.9 13.11 10 12 10C10.89 10 9.99996 10.9 9.99996 12C9.99996 13.1 10.9 14 12 14C13.1 14 14 13.11 14 12ZM19 15H21V21H19V15ZM15 15H17V21H15V15Z" />
    </Svg>
  );
};
