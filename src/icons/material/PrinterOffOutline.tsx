import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PrinterOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.41 1.59961L22.36 22.5496L20.95 23.9596L18 20.9996H6V16.9996H2V10.9996C2 9.33961 3.34 7.99961 5 7.99961L0 2.99961L1.41 1.59961ZM6 14.9996V12.9996H10L7 9.99961H5C4.45 9.99961 4 10.4496 4 10.9996V14.9996H6ZM8 18.9996H16L12 14.9996H8V18.9996ZM8 4.99961V5.35961L6 3.35961V2.99961H18V7.99961H19C20.66 7.99961 22 9.33961 22 10.9996V16.9996H19.66L15.66 12.9996H18V14.9996H20V10.9996C20 10.4496 19.55 9.99961 19 9.99961H12.66L10.66 7.99961H16V4.99961H8ZM19 11.4996C19 12.0596 18.55 12.4996 18 12.4996C17.45 12.4996 17 12.0596 17 11.4996C17 10.9596 17.45 10.4996 18 10.4996C18.55 10.4996 19 10.9596 19 11.4996Z" />
    </Svg>
  );
};
