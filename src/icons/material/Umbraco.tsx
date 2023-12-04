import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UmbracoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.6 8.6L7.17 8.38C6.5 11.67 6.46 14.24 7.61 15.5C8.6 16.61 11.89 16.61 11.89 16.61C11.89 16.61 15.29 16.61 16.28 15.5C17.43 14.24 17.38 11.67 16.72 8.38L15.29 8.6C15.29 8.6 16.54 13.88 14.69 14.69C13.81 15.07 11.89 15.07 11.89 15.07C11.89 15.07 10.08 15.07 9.2 14.69C7.35 13.88 8.6 8.6 8.6 8.6ZM12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3Z" />
    </Svg>
  );
};
