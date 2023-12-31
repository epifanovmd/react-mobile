import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BasketCheckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.63 16.27L17.76 20.17L16.41 18.8L15 20.22L17.75 23L23.03 17.68L21.63 16.27ZM13 20C13 16.69 15.69 14 19 14C20 14 20.92 14.24 21.74 14.67L22.96 10.29L23 10C23 9.45 22.55 9 22 9H17.42L12.83 2.44C12.65 2.17 12.34 2 12 2C11.66 2 11.36 2.17 11.18 2.43L6.58 9H2C1.45 9 1 9.45 1 10L1.1 10.44L3.71 19.9C4.04 20.55 4.72 21 5.5 21H13.09C13.04 20.67 13 20.34 13 20ZM12 4.74L15 9H9L12 4.74ZM10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.11 17 12 17C10.89 17 10 16.11 10 15Z" />
    </Svg>
  );
};
