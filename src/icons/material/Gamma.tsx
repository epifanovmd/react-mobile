import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GammaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.76 19C12.92 19 13.58 18 13.58 16.29C13.58 15.2 13.5 13.88 13.3 12.67L18 5H15.28L12.71 9.82L12.55 9.33C11.83 7.19 10.82 5 8.68 5C8 5 7.45 5.18 7 5.54C6 6.39 6 8 6 8.5H6.91C6.97 8.06 7.21 6.83 8.25 6.83C10 6.83 10.8 10 11.4 12.42C10.5 14.58 10 16.14 10 16.97C10 17.95 10.56 19 11.76 19Z" />
    </Svg>
  );
};
