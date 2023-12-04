import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandPointingLeftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 8.99961H13L11.31 5.79961L11.28 5.57961C11.28 5.28961 11.4 5.02961 11.6 4.83961L12.37 4.09961L16.57 8.99961C16.84 9.25961 17 9.60961 17 9.99961V16.4996C17 17.2696 16.3 17.9996 15.5 17.9996H11.14C10.53 17.9996 10 17.6496 9.8 17.1496L7.6 12.2096L7.47 10.9996H3C2.73478 10.9996 2.48043 10.8943 2.29289 10.7067C2.10536 10.5192 2 10.2648 2 9.99961C2 9.73439 2.10536 9.48004 2.29289 9.2925C2.48043 9.10497 2.73478 8.99961 3 8.99961ZM19 17.9996V9.99961H22V17.9996H19Z" />
    </Svg>
  );
};
