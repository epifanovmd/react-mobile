import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandSawIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.8 17L5.9 11.6L20 2L22 5V8H19V11H16V14H13V17H9.8ZM9.7 18.7L9.2 21.5L7.6 22.7C6.7 23.3 5.5 23.1 4.8 22.2L1.3 17.3C0.699999 16.4 0.899999 15.2 1.8 14.5L5.1 12.2L9.7 18.7ZM4.6 15L3 16.1L6.5 21L8.1 19.8L4.6 15Z" />
    </Svg>
  );
};
