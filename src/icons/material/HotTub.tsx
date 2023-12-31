import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HotTubIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 4C7.53043 4 8.03914 4.21071 8.41421 4.58579C8.78929 4.96086 9 5.46957 9 6C9 6.53043 8.78929 7.03914 8.41421 7.41421C8.03914 7.78929 7.53043 8 7 8C6.46957 8 5.96086 7.78929 5.58579 7.41421C5.21071 7.03914 5 6.53043 5 6C5 5.46957 5.21071 4.96086 5.58579 4.58579C5.96086 4.21071 6.46957 4 7 4ZM11.15 12H22V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12H5V11.25C5 10 6 9 7.25 9H7.28C7.62 9 7.95 9.09 8.24 9.23C8.5 9.35 8.74 9.5 8.93 9.73L10.33 11.28C10.56 11.54 10.84 11.78 11.15 12ZM7 20V14H5V20H7ZM11 20V14H9V20H11ZM15 20V14H13V20H15ZM19 20V14H17V20H19ZM18.65 5.86C19.68 6.86 20.16 8.21 19.95 9.57L19.89 10H18L18.09 9.41C18.24 8.62 18 7.83 17.42 7.21L17.35 7.15C16.32 6.14 15.85 4.79 16.05 3.43L16.11 3H18L17.91 3.59C17.76 4.38 18 5.17 18.58 5.79L18.65 5.86ZM14.65 5.86C15.68 6.86 16.16 8.21 15.95 9.57L15.89 10H14L14.09 9.41C14.24 8.62 14 7.83 13.42 7.21L13.35 7.15C12.32 6.14 11.85 4.79 12.05 3.43L12.11 3H14L13.91 3.59C13.76 4.38 14 5.17 14.58 5.79L14.65 5.86Z" />
    </Svg>
  );
};
