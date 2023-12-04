import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DomeLightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 10C21 14.97 16.97 19 12 19C7.03 19 3 14.97 3 10V9.03C3 8.76 3.11 8.5 3.3 8.3C3.5 8.11 3.76 8 4.03 8H20C20.25 8 20.5 8.11 20.7 8.3C20.89 8.5 21 8.75 21 9V10ZM5 10C5 13.86 8.14 17 12 17C15.86 17 19 13.86 19 10H5ZM20 6V7H4V6C4 5.73 4.1 5.5 4.29 5.29C4.5 5.1 4.73 5 5 5H10V3H14V5H19C19.25 5 19.5 5.11 19.7 5.3C19.89 5.5 20 5.75 20 6Z" />
    </Svg>
  );
};
