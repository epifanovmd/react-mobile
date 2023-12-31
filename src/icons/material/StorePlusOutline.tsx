import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StorePlusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 6H4V4H20V6ZM15.69 14H14V15.69C13.37 16.64 13 17.77 13 19C13 19.34 13.04 19.67 13.09 20H4V14H3V12L4 7H20L21 12V13.35C20.37 13.13 19.7 13 19 13C17.77 13 16.64 13.37 15.69 14ZM12 14H6V18H12V14ZM18.96 12L18.36 9H5.64L5.04 12H18.96ZM20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" />
    </Svg>
  );
};
