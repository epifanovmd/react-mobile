import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GasStationOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 4.27L2.28 3L21 21.72L19.73 23L17.71 21C16.56 20.85 15.65 19.94 15.5 18.78L14 17.27V21H4V7.27L1 4.27ZM18 10C18.55 10 19 9.55 19 9C19 8.45 18.55 8 18 8C17.45 8 17 8.45 17 9C17 9.55 17.45 10 18 10ZM12 10V5H6.82L5.06 3.23C5.34 3.08 5.66 3 6 3H12C13.1 3 14 3.89 14 5V12H15C16.1 12 17 12.89 17 14V15.18L11.82 10H12ZM6 10H6.73L6 9.27V10ZM19.77 7.23C20.22 7.68 20.5 8.31 20.5 9V18.67L19 17.18V11.29C18.69 11.42 18.36 11.5 18 11.5C16.62 11.5 15.5 10.38 15.5 9C15.5 7.93 16.17 7.03 17.11 6.67L15 4.56L16.06 3.5L19.78 7.22L19.77 7.23Z" />
    </Svg>
  );
};
