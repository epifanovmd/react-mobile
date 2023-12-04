import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlagVariantOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 3C6.26522 3 6.51957 3.10536 6.70711 3.29289C6.89464 3.48043 7 3.73478 7 4V4.88C8.06 4.44 9.5 4 11 4C14 4 14 6 16 6C19 6 20 4 20 4V12C20 12 19 14 16 14C13 14 13 12 11 12C8 12 7 14 7 14V21H5V4C5 3.73478 5.10536 3.48043 5.29289 3.29289C5.48043 3.10536 5.73478 3 6 3ZM7 7.25V11.5C7 11.5 9 10 11 10C13 10 14 12 16 12C18 12 18 11 18 11V7.5C18 7.5 17 8 16 8C14 8 13 6 11 6C9 6 7 7.25 7 7.25Z" />
    </Svg>
  );
};
