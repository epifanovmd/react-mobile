import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardCheckOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 19C13 18.66 13.04 18.33 13.09 18H3V12H19V13C19.7 13 20.37 13.13 21 13.35V6C21 4.89 20.11 4 19 4H3C1.89 4 1 4.89 1 6V18C1 19.1 1.89 20 3 20H13.09C13.04 19.67 13 19.34 13 19ZM3 6H19V8H3V6ZM17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25L17.75 22Z" />
    </Svg>
  );
};
