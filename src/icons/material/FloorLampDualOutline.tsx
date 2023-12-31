import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FloorLampDualOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.73 10.06L10.17 11.24L11 12.2V20H8V22H16V20H13V12.3L13.85 11.26L12.27 10.07L11.73 10.06ZM8.32 5.31L9.23 8.19L9 8.37L6.47 6.7L8.32 5.31ZM9.39 2L3 6.81L9.08 10.82L11.55 8.93L9.39 2ZM15.67 5.3L17.53 6.7L15 8.37L14.77 8.2L15.67 5.3ZM14.61 2L12.44 8.95L14.92 10.82L21 6.81L14.61 2Z" />
    </Svg>
  );
};
