import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadCheckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 3C9.22996 3 6.18996 5.95 5.99996 9.66L4.07996 12.19C3.83996 12.5 4.07996 13 4.49996 13H5.99996V16C5.99996 17.11 6.88996 18 7.99996 18H8.99996V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3ZM12.47 13L8.99996 9.5L10.4 8.09L12.47 10.17L16.6 6L18 7.41L12.47 13Z" />
    </Svg>
  );
};
