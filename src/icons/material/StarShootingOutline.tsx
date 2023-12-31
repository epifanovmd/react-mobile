import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StarShootingOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 7.5L16.53 6.96L14 1L11.47 6.96L4.99997 7.5L9.89997 11.77L8.43997 18.1L14 14.74L19.56 18.1L18.09 11.77L23 7.5ZM16.14 12.23L16.54 13.94L15.03 13.03L14 12.41L12.97 13.03L11.46 13.94L11.85 12.23L12.13 11.05L11.22 10.26L9.87997 9.1L11.64 8.95L12.84 8.85L13.31 7.74L14 6.12L14.69 7.74L15.16 8.85L16.36 8.95L18.11 9.1L16.78 10.26L15.86 11.05L16.14 12.23ZM1.15997 12C0.860972 11.5 0.988972 10.89 1.44997 10.59L4.17997 8.79L5.74997 10.15L2.54997 12.26C2.37997 12.37 2.18997 12.43 1.99997 12.43C1.67997 12.43 1.35997 12.27 1.15997 12ZM1.44997 20.16L7.30997 16.31L6.99997 17.76L6.65997 19.13L2.54997 21.84C2.37997 21.95 2.18997 22 1.99997 22C1.67997 22 1.35997 21.84 1.15997 21.55C0.860972 21.09 0.988972 20.47 1.44997 20.16ZM7.31997 11.5L8.23997 12.31L7.96997 13.5L2.54997 17.05C2.37997 17.16 2.18997 17.21 1.99997 17.21C1.67997 17.21 1.35997 17.06 1.15997 16.76C0.860972 16.3 0.988972 15.68 1.44997 15.38L7.31997 11.5Z" />
    </Svg>
  );
};
