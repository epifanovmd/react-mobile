import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CoffeeMakerCheckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.75 21.16L15 18.16L16.16 17L17.75 18.59L21.34 15L22.5 16.41L17.75 21.16ZM13 18C13 15.78 14.21 13.85 16 12.81V11H6V16C6 17.64 6.81 19.09 8.03 20H4V4H6V6C6 6.55 6.45 7 7 7H15C15.55 7 16 6.55 16 6V4H18V2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H14.54C13.58 20.94 13 19.54 13 18ZM10 9C10 9.55 10.45 10 11 10C11.55 10 12 9.55 12 9C12 8.45 11.55 8 11 8C10.45 8 10 8.45 10 9Z" />
    </Svg>
  );
};
