import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseSettingsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 22H9V24H7V22ZM11 22H13V24H11V22ZM15 22H17V24H15V22ZM12 3C16.42 3 20 4.79 20 7C20 9.21 16.42 11 12 11C7.58 11 4 9.21 4 7C4 4.79 7.58 3 12 3ZM4 9C4 11.21 7.58 13 12 13C16.42 13 20 11.21 20 9V12C20 14.21 16.42 16 12 16C7.58 16 4 14.21 4 12V9ZM4 14C4 16.21 7.58 18 12 18C16.42 18 20 16.21 20 14V17C20 18.19 18.95 19.27 17.29 20H6.71C5.05 19.27 4 18.19 4 17V14Z" />
    </Svg>
  );
};
