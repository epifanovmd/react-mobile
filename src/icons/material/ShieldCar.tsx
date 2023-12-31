import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldCarIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.42 7.5L16 11H8L9.42 7.5H14.42ZM9 12C8.45 12 8 12.45 8 13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13C10 12.45 9.55 12 9 12ZM15 12C14.45 12 14 12.45 14 13C14 13.55 14.45 14 15 14C15.55 14 16 13.55 16 13C16 12.45 15.55 12 15 12ZM21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5ZM18 12L15.84 7C15.64 6.42 15.08 6 14.42 6H9.42C8.76 6 8.2 6.42 8 7L6 12V16C6 16.55 6.45 17 7 17H8C8.55 17 9 16.55 9 16V15H15V16C15 16.55 15.45 17 16 17H17C17.55 17 18 16.55 18 16V12Z" />
    </Svg>
  );
};
