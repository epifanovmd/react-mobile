import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiceD6Icon: FC<FlexSvgProps> = ({
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
      <Path d="M13.05 13.5C13.05 14.27 12.61 14.83 12 14.83C11.39 14.83 10.85 14.27 10.85 13.5L10.83 12.78C10.83 12.78 11.21 12 11.95 12.1C12.56 12.1 13.05 12.73 13.05 13.5ZM21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5ZM14.55 13.41C14.5 11.45 13.19 10.87 12.53 10.87C11.41 10.87 10.86 11.53 10.86 11.53C10.86 11.53 10.89 9.5 13.39 9.53V8.33C13.39 8.33 9.33 7.94 9.3 12.66C9.27 16.86 12.77 16 12.77 16C12.77 16 14.61 15.47 14.55 13.41Z" />
    </Svg>
  );
};
