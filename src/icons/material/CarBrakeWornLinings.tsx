import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarBrakeWornLiningsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 5C15.86 5 19 8.14 19 12C19 15.86 15.86 19 12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5ZM12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM4.58 4.58L3.5 3.5C2.37 4.65 1.47 6.03 0.861 7.55L2.3 8C2.84 6.71 3.61 5.56 4.58 4.58ZM1.71 14.1C1.57 13.42 1.5 12.72 1.5 12C1.5 11.28 1.57 10.58 1.71 9.9L0.275 9.46C0.098 10.28 0 11.13 0 12C0 12.87 0.098 13.72 0.275 14.54L1.71 14.1ZM23.14 7.55C22.53 6.03 21.63 4.65 20.5 3.5L19.42 4.58C20.39 5.56 21.16 6.71 21.7 8L23.14 7.55ZM0.861 16.45C1.47 18 2.37 19.35 3.5 20.5L4.58 19.42C3.61 18.44 2.84 17.29 2.3 16L0.861 16.45ZM19.42 19.42L20.5 20.5C21.63 19.35 22.53 18 23.14 16.45L21.7 16C21.16 17.29 20.39 18.44 19.42 19.42ZM22.29 9.9C22.43 10.58 22.5 11.28 22.5 12C22.5 12.72 22.43 13.42 22.29 14.1L23.73 14.54C23.9 13.72 24 12.87 24 12C24 11.13 23.9 10.28 23.73 9.46L22.29 9.9Z" />
    </Svg>
  );
};
