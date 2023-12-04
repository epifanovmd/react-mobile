import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CheckboxBlankBadgeOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 4.5C23 6.43 21.43 8 19.5 8C17.57 8 16 6.43 16 4.5C16 2.57 17.57 1 19.5 1C21.43 1 23 2.57 23 4.5ZM19.5 10C19.33 10 19.17 10 19 10V19H5V5H14.03C14 4.84 14 4.67 14 4.5C14 4 14.08 3.5 14.21 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V9.79C20.5 9.92 20 10 19.5 10Z" />
    </Svg>
  );
};
