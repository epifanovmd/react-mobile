import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CubeSendIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 4L9 8.04V15.96L16 20L23 15.96V8.04L16 4ZM16 6.31L19.8 8.5L16 10.69L12.21 8.5L16 6.31ZM0 7V9H7V7H0ZM11 10.11L15 12.42V17.11L11 14.81V10.11ZM21 10.11V14.81L17 17.11V12.42L21 10.11ZM2 11V13H7V11H2ZM4 15V17H7V15" />
    </Svg>
  );
};
