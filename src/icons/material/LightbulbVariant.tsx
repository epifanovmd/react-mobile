import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 20H15V21C15 21.55 14.55 22 14 22H10C9.45 22 9 21.55 9 21V20ZM19 9C19 11.38 17.81 13.47 16 14.74V17C16 17.55 15.55 18 15 18H9C8.45 18 8 17.55 8 17V14.74C6.19 13.47 5 11.38 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9ZM14.71 8.29C14.32 7.9 13.68 7.9 13.29 8.29L12 9.59L10.71 8.29C10.32 7.9 9.68 7.9 9.29 8.29C8.9 8.68 8.9 9.32 9.29 9.71L11 11.41V16H13V11.41L14.71 9.71C15.1 9.32 15.1 8.68 14.71 8.29Z" />
    </Svg>
  );
};
