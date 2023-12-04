import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandExtendedOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 15V16L14 18.5L7 16.6V18H1V7H9L15.2 9.3C16.2 9.7 17 10.8 17 12H19C20.7 12 22 13.3 22 15ZM5 16V9H3V16H5ZM19.9 14.6C19.7 14.2 19.4 14 19 14H13.6C13.1 14 12.5 13.9 12 13.8L9.7 13L10.3 11.1L12.7 11.9C13 11.9 15 12 15 12C15 11.6 14.8 11.3 14.4 11.2L8.6 9H7V14.5L14 16.4L19.9 14.6Z" />
    </Svg>
  );
};
