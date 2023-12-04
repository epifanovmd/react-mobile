import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StickerRemoveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2ZM12 13.4L9.9 15.5L8.5 14.1L10.6 12L8.5 9.9L9.9 8.5L12 10.6L14.1 8.5L15.5 9.9L13.4 12L15.5 14.1L14.1 15.5L12 13.4ZM15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z" />
    </Svg>
  );
};
