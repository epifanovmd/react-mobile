import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RowingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.5 14.5L4 19L5.5 20.5L9 17H11L8.5 14.5ZM15 1C14.4696 1 13.9609 1.21071 13.5858 1.58579C13.2107 1.96086 13 2.46957 13 3C13 3.53043 13.2107 4.03914 13.5858 4.41421C13.9609 4.78929 14.4696 5 15 5C15.5304 5 16.0391 4.78929 16.4142 4.41421C16.7893 4.03914 17 3.53043 17 3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1ZM21 21L18 24L15 21V19.5L7.91 12.41C7.6 12.46 7.3 12.5 7 12.5V10.32C8.66 10.35 10.61 9.45 11.67 8.28L13.07 6.73C13.26 6.5 13.5 6.35 13.76 6.23C14.05 6.09 14.38 6 14.72 6H14.75C16 6 17 7 17 8.26V14C17 14.85 16.65 15.62 16.08 16.17L12.5 12.59V10.32C11.87 10.84 11.07 11.34 10.21 11.71L16.5 18H18L21 21Z" />
    </Svg>
  );
};
