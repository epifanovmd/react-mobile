import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KlingonIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.79004 21.5L4.71004 21.24C4.53004 20.65 4.47004 20.08 4.50004 19.4C4.60004 18.17 5.14004 17.31 5.82004 16.59C5.64004 16 5.53004 15.39 5.53004 14.74C5.53004 13 6.26004 11.44 7.45004 10.3C8.33004 9.46 9.46004 8.86 10.71 8.6C11.37 6.23 11.8 3.8 12 1.5C12.24 3.5 12.65 6.12 13.3 8.58C14.6 8.82 15.76 9.43 16.67 10.3C17.85 11.44 18.59 13 18.59 14.74C18.59 15.35 18.5 15.93 18.33 16.5C19.21 16.92 20.2 17.17 21.5 17.29L21.44 17.44C21.32 17.77 21 18 20.71 18.18L20.69 18.19C20.13 18.57 19.18 19 17.85 19C17.7 19 17.56 19 17.41 19C17.23 19 17.06 18.97 16.9 18.95C16.83 19 16.75 19.1 16.67 19.18C15.5 20.31 13.86 21 12.06 21C10.27 21 8.64004 20.31 7.46004 19.18C7.42004 19.14 7.38004 19.1 7.34004 19.06C6.34004 19.59 5.54004 20.33 4.94004 21.27L4.80004 21.5H4.79004ZM6.50004 15.94C6.65004 15.82 8.20004 14.5 8.63004 13.78L8.73004 13.61C9.65004 15 10.4 16.28 11.43 18.08L11.22 18.09C10.08 18.16 9.05004 18.37 8.15004 18.7C9.17004 19.62 10.55 20.19 12.06 20.19C13.54 20.19 14.88 19.65 15.89 18.77C15.64 18.72 15.39 18.65 15.15 18.59C14.38 18.41 13.65 18.22 12.81 18.19L12.62 18.18L12.7 18C13.1 17.2 14.8 14.41 15.23 13.63L15.34 13.81C16 14.77 16.73 15.5 17.58 16.07C17.69 15.64 17.75 15.2 17.75 14.75C17.75 13.25 17.11 11.89 16.09 10.9C15.4 10.24 14.53 9.74 13.55 9.5C13.85 10.5 14.2 11.5 14.59 12.35L14.62 12.4L14.59 12.46C14.2 13.22 13.76 13.95 13.33 14.66C12.94 15.3 12.54 15.96 12.18 16.64L12.08 16.83L11.96 16.65C11.39 15.82 9.75004 13.06 9.41004 12.5C9.81004 11.5 10.15 10.5 10.45 9.5C9.50004 9.78 8.70004 10.26 8.03004 10.9C7.00004 11.88 6.37004 13.25 6.37004 14.74C6.37004 15.16 6.42004 15.56 6.50004 15.95" />
    </Svg>
  );
};
