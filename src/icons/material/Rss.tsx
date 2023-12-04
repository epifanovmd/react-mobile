import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RssIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.18 15.6395C6.75817 15.6395 7.31266 15.8691 7.72149 16.278C8.13032 16.6868 8.36 17.2413 8.36 17.8195C8.36 18.9995 7.38 19.9995 6.18 19.9995C5 19.9995 4 18.9995 4 17.8195C4 17.2413 4.22968 16.6868 4.63851 16.278C5.04734 15.8691 5.60183 15.6395 6.18 15.6395ZM4 4.43945C8.12677 4.43945 12.0845 6.07881 15.0026 8.99687C17.9206 11.9149 19.56 15.8727 19.56 19.9995H16.73C16.73 18.3277 16.4007 16.6724 15.761 15.1279C15.1212 13.5834 14.1836 12.1801 13.0015 10.998C11.8194 9.81589 10.416 8.87821 8.87156 8.23847C7.32709 7.59872 5.67173 7.26945 4 7.26945V4.43945ZM4 10.0995C6.62564 10.0995 9.14375 11.1425 11.0004 12.9991C12.857 14.8557 13.9 17.3738 13.9 19.9995H11.07C11.07 18.1244 10.3251 16.3261 8.99924 15.0002C7.67336 13.6743 5.87508 12.9295 4 12.9295V10.0995Z" />
    </Svg>
  );
};
