import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookMinusMultipleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.09 20H5V6H3V20C3 21.11 3.9 22 5 22H13.81C13.44 21.39 13.2 20.71 13.09 20ZM19 2H9C7.9 2 7 2.9 7 4V16C7 17.11 7.9 18 9 18H13.09C13.2 17.29 13.44 16.61 13.81 16H9V4H11V10L13.5 7.75L16 10V4H19V13C19.68 13 20.36 13.11 21 13.34V4C21 2.9 20.11 2 19 2ZM23 18V20H15V18H23Z" />
    </Svg>
  );
};
