import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 11.9999C18.61 11.9999 17.22 11.5299 16 10.6699C13.56 12.3799 10.44 12.3799 8 10.6699C6.78 11.5299 5.39 11.9999 4 11.9999H2V13.9999H4C5.37 13.9999 6.74 13.6499 8 12.9999C10.5 14.2999 13.5 14.2999 16 12.9999C17.26 13.6499 18.62 13.9999 20 13.9999H22V11.9999" />
    </Svg>
  );
};
