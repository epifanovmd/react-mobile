import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandOkayIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.3 19.2594L18.96 13.6094L21.08 15.7294L15.42 21.3794L13.3 19.2594ZM16.5 11.1294L13.4 8.04939C13.27 7.91939 13.13 7.82939 13 7.75939L11.88 3.46939C11.74 2.92939 11.2 2.60939 10.66 2.74939C10.13 2.87939 9.81 3.42939 9.94 3.95939L11 8.02939L8.67 3.18939C8.44 2.68939 7.84 2.49939 7.34 2.70939C6.84 2.94939 6.63 3.54939 6.87 4.04939L8.56 7.58939L5.19 4.24939C4.8 3.85939 4.16 3.85939 3.77 4.24939C3.38 4.64939 3.39 5.27939 3.78 5.66939L7.5 9.36939L6.8 9.63939L5.72 10.0694L3.81 11.3894C3.81 11.3894 3 12.4394 2.93 12.8894C2.85 13.3394 3.72 15.5994 3.72 15.5994H3.73C3.89 15.9394 4.23 16.1794 4.63 16.1794C4.89522 16.1794 5.14957 16.074 5.33711 15.8865C5.52465 15.699 5.63 15.4446 5.63 15.1794C5.63 15.0794 5.6 14.9994 5.57 14.9094L5.59 14.8994L5 13.1694L6.23 12.1894C6.7 12.2094 7.71 12.2894 8.2 12.3194C10.93 14.7694 8.35 15.7294 8.35 15.7294L4.89 16.7894L4.72 16.9294C4.5 17.1294 4.41 17.3994 4.42 17.6794L4.44 18.7494L10.87 18.2494C11.25 18.2594 11.61 18.1194 11.89 17.8494L16.5 13.2494C17.03 12.7094 17.05 11.6994 16.5 11.1294Z" />
    </Svg>
  );
};
