import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbVariantOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM14 13.58V16H13V11.41L14.71 9.71C15.1 9.32 15.1 8.68 14.71 8.29C14.32 7.9 13.68 7.9 13.29 8.29L12 9.59L10.71 8.29C10.32 7.9 9.68 7.9 9.29 8.29C8.9 8.68 8.9 9.32 9.29 9.71L11 11.41V16H10V13.58C8.23 12.81 7 11.05 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.05 15.77 12.81 14 13.58ZM9 20H15V21C15 21.55 14.55 22 14 22H10C9.45 22 9 21.55 9 21V20Z" />
    </Svg>
  );
};
