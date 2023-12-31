import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CogTransferOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 17V14H18V12L22 15.5L18 19V17H15ZM17 18V21H14V23L9.99996 19.5L14 16V18H17ZM12 8C9.78996 8 7.99996 9.8 7.99996 12C7.99996 13.91 9.34996 15.54 11.21 15.92L16 11.86C15.93 9.71 14.16 8 12 8ZM12 14C10.9 14 9.99996 13.11 9.99996 12C9.99996 10.89 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.11 14 12 14ZM21.66 8.73L19.66 5.27C19.54 5.05 19.28 4.96 19.05 5.05L16.56 6.05C16.05 5.64 15.5 5.31 14.87 5.05L14.5 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.49996 2.42L9.12996 5.07C8.49996 5.33 7.95996 5.66 7.43996 6.07L4.99996 5.05C4.76996 4.96 4.49996 5.05 4.38996 5.27L2.38996 8.73C2.25996 8.94 2.30996 9.22 2.49996 9.37L4.56996 11L4.49996 12L4.56996 13L2.45996 14.63C2.25996 14.78 2.20996 15.06 2.33996 15.27L4.33996 18.73C4.44996 19 4.73996 19.11 4.99996 19L7.49996 18C7.73996 18.19 7.99996 18.37 8.25996 18.53L9.90996 17.13C9.13996 16.8 8.45996 16.31 7.90996 15.68L5.49996 16.68L4.72996 15.38L6.79996 13.8C6.39996 12.63 6.39996 11.37 6.79996 10.2L4.68996 8.65L5.43996 7.35L7.84996 8.35C8.62996 7.45 9.67996 6.82 10.85 6.57L11.25 4H12.75L13.12 6.62C14.29 6.86 15.34 7.5 16.12 8.39L18.53 7.39L19.28 8.69L17.2 10.2C17.29 10.46 17.36 10.73 17.4 11H19.4L21.5 9.37C21.72 9.23 21.78 8.95 21.66 8.73ZM12 8C9.78996 8 7.99996 9.8 7.99996 12C7.99996 13.91 9.34996 15.54 11.21 15.92L16 11.86C15.93 9.71 14.16 8 12 8ZM12 14C10.9 14 9.99996 13.11 9.99996 12C9.99996 10.89 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.11 14 12 14ZM12 8C9.78996 8 7.99996 9.8 7.99996 12C7.99996 13.91 9.34996 15.54 11.21 15.92L16 11.86C15.93 9.71 14.16 8 12 8ZM12 14C10.9 14 9.99996 13.11 9.99996 12C9.99996 10.89 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.11 14 12 14Z" />
    </Svg>
  );
};
