import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlphabetTengwarIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 7L12.5 3H15L11 7H10ZM12.5 9C11.96 9 11.46 9.13 11 9.35V9H8V11H9V21H11V12.5C11 11.67 11.67 11 12.5 11C13.33 11 14 11.67 14 12.5V14.5C14 15.33 13.33 16 12.5 16H12V18H12.5C14.43 18 16 16.43 16 14.5V12.5C16 10.57 14.43 9 12.5 9Z" />
    </Svg>
  );
};
