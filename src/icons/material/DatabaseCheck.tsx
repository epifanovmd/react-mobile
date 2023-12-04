import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseCheckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 3C16.42 3 20 4.79 20 7C20 9.21 16.42 11 12 11C7.58 11 4 9.21 4 7C4 4.79 7.58 3 12 3ZM4 9C4 11.21 7.58 13 12 13C16.42 13 20 11.21 20 9V12.08L19 12C16.41 12 14.2 13.64 13.36 15.94L12 16C7.58 16 4 14.21 4 12V9ZM4 14C4 16.21 7.58 18 12 18H13C13 19.05 13.27 20.04 13.75 20.9L12 21C7.58 21 4 19.21 4 17V14ZM18 21.08L15.25 18.08L16.41 16.92L18 18.5L21.59 14.92L22.75 16.33L18 21.08Z" />
    </Svg>
  );
};
