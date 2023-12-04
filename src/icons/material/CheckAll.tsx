import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CheckAllIcon: FC<FlexSvgProps> = ({
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
      <Path d="M0.410034 13.4101L6.00003 19.0001L7.41003 17.5801L1.83003 12.0001L0.410034 13.4101ZM22.24 5.58008L11.66 16.1701L7.50003 12.0001L6.07003 13.4101L11.66 19.0001L23.66 7.00008L22.24 5.58008ZM18 7.00008L16.59 5.58008L10.24 11.9301L11.66 13.3401L18 7.00008Z" />
    </Svg>
  );
};
