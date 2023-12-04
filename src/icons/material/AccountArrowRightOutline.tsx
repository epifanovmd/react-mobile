import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountArrowRightOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 13C7.33 13 2 14.33 2 17V20H13.09C13.07 19.86 13.05 19.73 13.04 19.59C13 19.4 13 19.2 13 19C13 18.69 13.03 18.39 13.08 18.1C13.21 17.21 13.54 16.38 14 15.66C14.21 15.38 14.42 15.12 14.65 14.88L14.67 14.85C14.9 14.61 15.16 14.39 15.43 14.19C14.76 13.88 14 13.64 13.26 13.45C12.07 13.15 10.89 13 10 13ZM11.05 18.1H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.68 14.9 11.36 15 12 15.11C11.5 16 11.18 17 11.05 18.1ZM10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12ZM10 6C11.11 6 12 6.9 12 8C12 9.1 11.11 10 10 10C8.89 10 8 9.11 8 8C8 6.89 8.9 6 10 6ZM20 22V20H16V18H20V16L23 19L20 22Z" />
    </Svg>
  );
};
