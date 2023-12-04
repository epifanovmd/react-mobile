import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CubeOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.84 22.7305L17.28 19.1705L12.57 21.8205C12.41 21.9405 12.21 22.0005 12 22.0005C11.79 22.0005 11.59 21.9405 11.43 21.8205L3.52999 17.3805C3.20999 17.2105 2.99999 16.8805 2.99999 16.5005V7.50047C2.99999 7.12047 3.20999 6.79047 3.52999 6.62047L4.29999 6.19047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305ZM12 4.15047L17.96 7.50047L13.31 10.1105L20.53 17.3305C20.82 17.1605 21 16.8505 21 16.5005V7.50047C21 7.12047 20.79 6.79047 20.47 6.62047L12.57 2.18047C12.41 2.06047 12.21 2.00047 12 2.00047C11.79 2.00047 11.59 2.06047 11.43 2.18047L7.55999 4.36047L8.99999 5.82047L12 4.15047Z" />
    </Svg>
  );
};
