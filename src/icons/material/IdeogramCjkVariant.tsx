import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const IdeogramCjkVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 4V6H4V8H15.36C15.13 8.87 14.63 9.77 13.88 10.69C13.35 11.35 12.71 12 12 12.67C11.29 12 10.65 11.35 10.12 10.69C9.65 10.12 9.3 9.55 9.03 9H6.85C7.21 10.05 7.82 11.03 8.56 11.95C9.13 12.66 9.79 13.34 10.5 14L5.36 18.23L6.64 19.77L12 15.34L17.36 19.77L18.64 18.23L13.5 14C14.21 13.34 14.87 12.66 15.44 11.95C16.41 10.74 17.16 9.43 17.4 8H20V6H13V4H11Z" />
    </Svg>
  );
};
