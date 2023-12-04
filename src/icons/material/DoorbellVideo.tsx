import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DoorbellVideoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 15C14 16.11 13.11 17 12 17C10.89 17 10 16.11 10 15C10 13.89 10.9 13 12 13C13.1 13 14 13.9 14 15ZM18 4V20C18 21.1 17.11 22 16 22H8C6.9 22 6 21.11 6 20V4C6 2.9 6.9 2 8 2H16C17.11 2 18 2.9 18 4ZM10.5 7C10.5 7.83 11.17 8.5 12 8.5C12.83 8.5 13.5 7.83 13.5 7C13.5 6.17 12.83 5.5 12 5.5C11.17 5.5 10.5 6.17 10.5 7ZM16 10H8V20H16V10Z" />
    </Svg>
  );
};
