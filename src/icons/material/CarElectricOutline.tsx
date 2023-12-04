import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarElectricOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.92 2C18.72 1.42 18.16 1 17.5 1H6.5C5.84 1 5.29 1.42 5.08 2L3 8V16C3 16.55 3.45 17 4 17H5C5.55 17 6 16.55 6 16V15H18V16C18 16.55 18.45 17 19 17H20C20.55 17 21 16.55 21 16V8L18.92 2ZM6.85 3H17.14L18.22 6.11H5.77L6.85 3ZM19 13H5V8H19V13ZM7.5 9C8.33 9 9 9.67 9 10.5C9 11.33 8.33 12 7.5 12C6.67 12 6 11.33 6 10.5C6 9.67 6.67 9 7.5 9ZM16.5 9C17.33 9 18 9.67 18 10.5C18 11.33 17.33 12 16.5 12C15.67 12 15 11.33 15 10.5C15 9.67 15.67 9 16.5 9ZM7 20H11V18L17 21H13V23L7 20Z" />
    </Svg>
  );
};
