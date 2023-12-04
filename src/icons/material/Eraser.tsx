import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EraserIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.24 3.55961L21.19 8.49961C21.97 9.28961 21.97 10.5496 21.19 11.3396L12 20.5296C10.44 22.0896 7.90998 22.0896 6.33998 20.5296L2.80998 16.9996C2.02998 16.2096 2.02998 14.9496 2.80998 14.1596L13.41 3.55961C14.2 2.77961 15.46 2.77961 16.24 3.55961ZM4.21998 15.5796L7.75998 19.1096C8.53998 19.8996 9.79998 19.8996 10.59 19.1096L14.12 15.5796L9.16998 10.6296L4.21998 15.5796Z" />
    </Svg>
  );
};
