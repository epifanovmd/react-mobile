import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BarleyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.33 18.33C6.5 17.17 6.5 15.83 6.5 14.5C8.17 15.5 9.83 16.5 10.67 17.67L11 18.23V15.95C9.5 15.05 8.08 14.13 7.33 13.08C6.5 11.92 6.5 10.58 6.5 9.24996C8.17 10.25 9.83 11.25 10.67 12.42L11 13V10.7C9.5 9.79996 8.08 8.87996 7.33 7.82996C6.5 6.66996 6.5 5.32996 6.5 3.99996C8.17 4.99996 9.83 5.99996 10.67 7.16996C10.77 7.30996 10.86 7.45996 10.94 7.61996C10.77 6.99996 10.66 6.41996 10.65 5.81996C10.64 4.30996 11.3 2.75996 11.96 1.20996C12.65 2.68996 13.34 4.17996 13.35 5.68996C13.36 6.31996 13.25 6.95996 13.07 7.58996C13.15 7.44996 13.23 7.30996 13.33 7.16996C14.17 5.99996 15.83 4.99996 17.5 3.99996C17.5 5.32996 17.5 6.66996 16.67 7.82996C15.92 8.87996 14.5 9.79996 13 10.7V13L13.33 12.42C14.17 11.25 15.83 10.25 17.5 9.24996C17.5 10.58 17.5 11.92 16.67 13.08C15.92 14.13 14.5 15.05 13 15.95V18.23L13.33 17.67C14.17 16.5 15.83 15.5 17.5 14.5C17.5 15.83 17.5 17.17 16.67 18.33C15.92 19.38 14.5 20.3 13 21.2V23H11V21.2C9.5 20.3 8.08 19.38 7.33 18.33Z" />
    </Svg>
  );
};
