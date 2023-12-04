import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChevronTripleRightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.5801 16.59L19.1701 12L14.5801 7.41L16.0001 6L22.0001 12L16.0001 18L14.5801 16.59ZM8.58008 16.59L13.1701 12L8.58008 7.41L10.0001 6L16.0001 12L10.0001 18L8.58008 16.59ZM2.58008 16.59L7.17008 12L2.58008 7.41L4.00008 6L10.0001 12L4.00008 18L2.58008 16.59Z" />
    </Svg>
  );
};
