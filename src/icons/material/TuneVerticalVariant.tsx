import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TuneVerticalVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 12.14V2H6V12.14C4.28 12.59 3 14.14 3 16C3 17.86 4.28 19.41 6 19.86V22H8V19.86C9.72 19.41 11 17.86 11 16C11 14.14 9.72 12.59 8 12.14ZM7 14C8.1 14 9 14.9 9 16C9 17.1 8.1 18 7 18C5.9 18 5 17.1 5 16C5 14.9 5.9 14 7 14ZM18 2H16V4.14C14.28 4.59 13 6.14 13 8C13 9.86 14.28 11.41 16 11.86V22H18V11.86C19.72 11.41 21 9.86 21 8C21 6.14 19.72 4.59 18 4.14V2ZM17 6C18.1 6 19 6.9 19 8C19 9.1 18.1 10 17 10C15.9 10 15 9.1 15 8C15 6.9 15.9 6 17 6Z" />
    </Svg>
  );
};
