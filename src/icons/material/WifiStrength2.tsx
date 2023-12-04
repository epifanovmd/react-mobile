import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrength2Icon: FC<FlexSvgProps> = ({
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
      <Path d="M11.9999 3C7.78988 3 3.69988 4.41 0.379883 7C4.40988 12.06 7.88988 16.37 11.9999 21.5C16.0799 16.42 20.2399 11.24 23.6499 7C20.3199 4.41 16.2199 3 11.9999 3ZM11.9999 5C15.0699 5 18.0899 5.86 20.7099 7.45L17.4999 11.43C16.2599 10.74 14.3699 10 11.9999 10C9.61988 10 7.73988 10.75 6.49988 11.43L3.26988 7.44C5.90988 5.85 8.92988 5 11.9999 5Z" />
    </Svg>
  );
};
