import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClockPlusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.47 15.08L11 13V7H12.5V12.25L15.58 14.08C15.17 14.36 14.79 14.7 14.47 15.08ZM13.08 19.92C12.72 19.97 12.37 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 12.37 19.97 12.72 19.92 13.08C20.61 13.18 21.25 13.4 21.84 13.72C21.94 13.16 22 12.59 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.47 22 12 22C12.59 22 13.16 21.94 13.72 21.84C13.4 21.25 13.18 20.61 13.08 19.92ZM18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" />
    </Svg>
  );
};
