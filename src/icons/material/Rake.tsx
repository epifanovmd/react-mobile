import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RakeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.5 17.0497L9.43 15.9997L22.07 3.34969L20.66 1.92969L8 14.5797L6.95 13.4997C6.17 12.7297 4.9 12.7297 4.12 13.4997L2 15.6397L2.71 16.3397L4.83 14.2197L5.54 14.9297L3.41 17.0497L4.12 17.7597L6.24 15.6397L6.95 16.3397L4.83 18.4597L5.54 19.1697L7.66 17.0497L8.36 17.7597L6.24 19.8797L6.95 20.5897L9.07 18.4597L9.78 19.1697L7.66 21.2897L8.36 21.9997L10.5 19.8797C11.27 19.0997 11.27 17.8297 10.5 17.0497Z" />
    </Svg>
  );
};
