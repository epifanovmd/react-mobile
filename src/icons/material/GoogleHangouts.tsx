import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleHangoutsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 11L14 13H12.5L13.5 11H12V8H15V11ZM11 11L10 13H8.5L9.5 11H8V8H11V11ZM11.5 2C9.24566 2 7.08365 2.89553 5.48959 4.48959C3.89553 6.08365 3 8.24566 3 10.5C3 12.7543 3.89553 14.9163 5.48959 16.5104C7.08365 18.1045 9.24566 19 11.5 19H12V22.5C16.86 20.15 20 15 20 10.5C20 5.8 16.19 2 11.5 2Z" />
    </Svg>
  );
};
