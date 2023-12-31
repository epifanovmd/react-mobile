import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PenLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.7 7C21.4 7.4 21 7.7 21 8C21 8.3 21.3 8.6 21.6 9C22.1 9.5 22.6 9.9 22.5 10.4C22.5 10.9 22 11.4 21.5 11.9L17.4 16L16 14.7L20.2 10.5L19.2 9.5L17.8 10.9L14 7.1L18 3.3C18.4 2.9 19 2.9 19.4 3.3L21.7 5.6C22.1 6 22.1 6.7 21.7 7ZM4 17.2L13.6 7.6L17.3 11.4L7.8 21H4V17.2ZM8 5V4.5C8 3.1 6.9 2 5.5 2C4.1 2 3 3.1 3 4.5V5C2.4 5 2 5.4 2 6V10C2 10.6 2.4 11 3 11H8C8.6 11 9 10.6 9 10V6C9 5.4 8.6 5 8 5ZM7 5H4V4.5C4 3.7 4.7 3 5.5 3C6.3 3 7 3.7 7 4.5V5Z" />
    </Svg>
  );
};
