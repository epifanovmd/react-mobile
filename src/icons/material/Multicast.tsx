import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MulticastIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 2V4H12C10.9 4 10 4.89 10 6V9H12V6H17V8L20 5L17 2ZM17 9V11H6.73C6.37 10.38 5.71 10 5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C5.71 14 6.37 13.62 6.73 13H17V15L20 12L17 9ZM10 15V18C10 19.11 10.9 20 12 20H17V22L20 19L17 16V18H12V15H10Z" />
    </Svg>
  );
};
