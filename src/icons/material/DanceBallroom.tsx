import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DanceBallroomIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 3.5C14 4.33 13.33 5 12.5 5C11.67 5 11 4.33 11 3.5C11 2.67 11.67 2 12.5 2C13.33 2 14 2.67 14 3.5ZM8.5 5C7.67 5 7 5.67 7 6.5C7 7.33 7.67 8 8.5 8C9.33 8 10 7.33 10 6.5C10 5.67 9.33 5 8.5 5ZM14 12L13.22 9.75H16.18L18.34 8.67C18.71 8.5 18.86 8.04 18.67 7.67C18.5 7.3 18.04 7.14 17.67 7.33L16.85 7.74L16.36 6.9C16.07 6.25 15.36 5.88 14.66 6.04L12.19 6.57C11.5 6.72 11 7.35 11 8.07V8.77L8.57 10.39H8.58C8.5 10.46 8.39 10.55 8.33 10.67L7.44 12.44L5.66 13.33C5.29 13.5 5.14 13.97 5.33 14.34C5.46 14.6 5.73 14.75 6 14.75C6.11 14.75 6.23 14.73 6.34 14.67L8.56 13.56L9.6 11.5L11 13C10 16 3 20 3 20C3 20 7 22 12 22C17 22 21 20 21 20C21 20 16 16 14 12ZM16.85 11.09L16.53 11.25H15.33L15.39 11.41C15.91 12.44 16.67 13.5 17.5 14.44L16.97 11.03L16.85 11.09Z" />
    </Svg>
  );
};
