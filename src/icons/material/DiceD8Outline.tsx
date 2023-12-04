import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiceD8OutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 2C11.5001 2 11.0001 2.19 10.5901 2.59L2.59006 10.59C1.80006 11.37 1.80006 12.63 2.59006 13.41L10.5901 21.41C11.3701 22.2 12.6301 22.2 13.4101 21.41L21.4101 13.41C22.2001 12.63 22.2001 11.37 21.4101 10.59L13.4101 2.59C13.0001 2.19 12.5001 2 12.0001 2ZM12.0001 4L20.0001 12L12.0001 20L4.00006 12L12.0001 4ZM12.0001 8.25C13.3101 8.25 14.3801 9.2 14.3801 10.38C14.3801 11.07 14.0001 11.68 13.4401 12.07C14.1401 12.46 14.6001 13.13 14.6001 13.9C14.6001 15.12 13.4401 16.1 12.0001 16.1C10.5601 16.1 9.40006 15.12 9.40006 13.9C9.40006 13.13 9.86006 12.46 10.5601 12.07C10.0001 11.68 9.63006 11.07 9.63006 10.38C9.63006 9.2 10.6901 8.25 12.0001 8.25ZM12.0001 12.65C11.3901 12.65 10.9001 13.14 10.9001 13.75C10.9001 14.36 11.3901 14.85 12.0001 14.85C12.6101 14.85 13.1001 14.36 13.1001 13.75C13.1001 13.14 12.6101 12.65 12.0001 12.65ZM12.0001 9.5C11.5001 9.5 11.1001 9.95 11.1001 10.5C11.1001 11.05 11.5001 11.5 12.0001 11.5C12.5001 11.5 12.9001 11.05 12.9001 10.5C12.9001 9.95 12.5001 9.5 12.0001 9.5Z" />
    </Svg>
  );
};
