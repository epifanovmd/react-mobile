import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SeatFlatAngledIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.25 14.29L21.56 16.18L9.2 11.71L11.28 6.04999L19.84 9.13999C21.94 9.89999 23 12.2 22.25 14.29ZM1.5 12.14L8 14.5V19H16V17.37L20.5 19L21.21 17.11L2.19 10.25L1.5 12.14ZM7.3 10.2C8.79 9.49999 9.42 7.68999 8.71 6.19999C8 4.70999 6.2 4.07999 4.7 4.79999C3.21 5.49999 2.58 7.29999 3.3 8.79999C4 10.29 5.8 10.92 7.3 10.2Z" />
    </Svg>
  );
};
