import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PinwheelIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 12C12 9 14.5 6.5 17.5 6.5C20.5 6.5 23 9 23 12H12ZM12 12C12 15 9.5 17.5 6.5 17.5C3.5 17.5 1 15 1 12H12ZM12 12C9 12 6.5 9.5 6.5 6.5C6.5 3.5 9 1 12 1V12ZM12 12C15 12 17.5 14.5 17.5 17.5C17.5 20.5 15 23 12 23V12Z" />
    </Svg>
  );
};
