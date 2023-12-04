import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HvacIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.58 14C8.3 13.55 8.11 13.03 8.06 12.5H15.94C15.89 13.03 15.7 13.55 15.47 14H8.58ZM12 16C10.97 16 10.08 15.61 9.38 15H14.63C13.92 15.61 13.03 16 12 16ZM12 8C13.03 8 13.92 8.39 14.63 9H9.38C10.08 8.39 10.97 8 12 8ZM8.58 10H15.42C15.7 10.45 15.89 10.97 15.94 11.5H8.06C8.11 10.97 8.3 10.45 8.58 10ZM3 3V21H21V3H3ZM12 18C8.67 18 6 15.33 6 12C6 8.67 8.67 6 12 6C15.33 6 18 8.67 18 12C18 15.33 15.33 18 12 18Z" />
    </Svg>
  );
};
