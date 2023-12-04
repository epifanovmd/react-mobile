import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailOpenIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 7.99965L12 12.9996L20 7.99965L12 2.99965L4 7.99965ZM22 7.99965V17.9996C22 18.5301 21.7893 19.0388 21.4142 19.4139C21.0391 19.7889 20.5304 19.9996 20 19.9996H4C3.46957 19.9996 2.96086 19.7889 2.58579 19.4139C2.21071 19.0388 2 18.5301 2 17.9996V7.99965C2 7.26965 2.39 6.63965 2.97 6.28965L12 0.639648L21.03 6.28965C21.61 6.63965 22 7.26965 22 7.99965Z" />
    </Svg>
  );
};
