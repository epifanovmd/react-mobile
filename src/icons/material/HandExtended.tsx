import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandExtendedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 13C20.6 13 21.1 13.2 21.5 13.6C21.8 14 22 14.5 22 15L14 18L7 16V7H8.9L16.2 9.7C16.7 9.9 17 10.3 17 10.8C17 11.1 16.9 11.4 16.7 11.6C16.5 11.8 16.1 12 15.8 12H13L11.2 11.3L10.9 12.2L13 13H20ZM1 7H5V18H1V7Z" />
    </Svg>
  );
};
