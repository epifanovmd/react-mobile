import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChessKnightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 22H5V20H19V22ZM13 2C11.75 2 10.58 2.62 9.89 3.66L7 8L9 10L11.06 8.63C11.5 8.32 12.14 8.44 12.45 8.9C12.47 8.93 12.5 8.96 12.5 9C12.8 9.59 12.69 10.3 12.22 10.77L7.42 15.57C6.87 16.13 6.87 17.03 7.43 17.58C7.69 17.84 8.05 18 8.42 18H17V6C17 4.93913 16.5786 3.92172 15.8284 3.17157C15.0783 2.42143 14.0609 2 13 2Z" />
    </Svg>
  );
};
