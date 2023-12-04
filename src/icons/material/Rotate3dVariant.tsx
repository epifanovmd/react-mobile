import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Rotate3dVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 5C16.97 5 21 7.69 21 11C21 12.68 19.96 14.2 18.29 15.29C19.36 14.42 20 13.32 20 12.13C20 9.29 16.42 7 12 7V10L8 6L12 2V5ZM12 19C7.03 19 3 16.31 3 13C3 11.32 4.04 9.8 5.71 8.71C4.64 9.58 4 10.68 4 11.88C4 14.71 7.58 17 12 17V14L16 18L12 22V19Z" />
    </Svg>
  );
};
