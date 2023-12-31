import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BarleyOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.96 1.20996C11.3 2.75996 10.64 4.30996 10.65 5.81996C10.66 6.41996 10.77 6.99996 10.94 7.61996C10.86 7.45996 10.77 7.30996 10.67 7.16996C9.83 5.99996 8.17 4.99996 6.5 3.99996C6.5 4.79996 6.5 5.58996 6.68 6.35996L13 12.68V10.7C14.5 9.79996 15.92 8.87996 16.67 7.82996C17.5 6.66996 17.5 5.32996 17.5 3.99996C15.83 4.99996 14.17 5.99996 13.33 7.16996C13.23 7.30996 13.15 7.44996 13.07 7.58996C13.25 6.95996 13.36 6.31996 13.35 5.68996C13.34 4.17996 12.65 2.68996 11.96 1.20996ZM3.28 5.49996L2 6.76996L6.64 11.41C6.75 12 6.95 12.55 7.33 13.08C8.08 14.13 9.5 15.05 11 15.95V18.23L10.67 17.67C9.83 16.5 8.17 15.5 6.5 14.5C6.5 15.83 6.5 17.17 7.33 18.33C8.08 19.38 9.5 20.3 11 21.2V23H13V21.2C13.74 20.76 14.45 20.31 15.07 19.84L18.73 23.5L20 22.22C14 16.23 9.1 11.32 3.28 5.49996ZM17.5 9.24996C15.83 10.25 14.17 11.25 13.33 12.42L13.12 12.79L15 14.66C15.67 14.16 16.27 13.64 16.67 13.08C17.5 11.92 17.5 10.58 17.5 9.24996ZM17.5 14.5C16.93 14.84 16.38 15.18 15.85 15.53L17.29 16.97C17.5 16.17 17.5 15.33 17.5 14.5Z" />
    </Svg>
  );
};
