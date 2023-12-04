import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RazorSingleEdgeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 5V8H2V5H22ZM22 13V18H2V13H3.5C4.33 13 5 12.33 5 11.5C5 10.67 4.33 10 3.5 10H2V9H22V10H20.5C19.67 10 19 10.67 19 11.5C19 12.33 19.67 13 20.5 13H22ZM13 11C13 10.45 12.55 10 12 10C11.45 10 11 10.45 11 11V13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13V11Z" />
    </Svg>
  );
};
