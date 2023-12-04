import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BankMinusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 17H22V19H14V17ZM11.5 1L21 6V8H2V6L11.5 1ZM16 10H19V12.08L18 12C17.3 12 16.63 12.12 16 12.34V10ZM2 22V19H12.08C12.27 20.14 12.79 21.17 13.53 22H2ZM10 10H13V14.68C12.54 15.37 12.22 16.15 12.08 17H10V10ZM4 10H7V17H4V10Z" />
    </Svg>
  );
};
