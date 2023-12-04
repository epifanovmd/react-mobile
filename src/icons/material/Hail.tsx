import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HailIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 16H7V22H4V16ZM19 2.39C18.92 3.86 18.55 5.13 17.86 6.21C17.17 7.29 16.22 8 15 8.39V22H13V16H11V22H9V10.08C8.72 10.17 8.5 10.28 8.39 10.41C7.45 11.16 7 12.19 7 13.5V14H5V13.5C5 11.53 5.72 9.94 7.13 8.72C8.53 7.56 10.16 7 12 7C13.41 7 14.56 6.64 15.47 5.95C16.5 5.11 17 3.95 17 2.5V2H19V2.39ZM12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.53043 13.7893 5.03914 13.4142 5.41421C13.0391 5.78929 12.5304 6 12 6C11.4696 6 10.9609 5.78929 10.5858 5.41421C10.2107 5.03914 10 4.53043 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2Z" />
    </Svg>
  );
};
