import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DivingFlippersIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.28 3.66002C19.28 3.44002 18.54 2.25002 17.57 2.04002C16.6 1.83002 15.4 2.59002 14.42 2.37002C13.38 2.00002 12.22 2.13002 11.28 2.71002L11.21 17L11 18C10.64 19.62 11.67 21.22 13.29 21.58C14.9 21.93 16.5 20.91 16.86 19.29L17.07 18.29L23 5.28002C22.39 4.35002 21.39 3.76002 20.28 3.66002ZM14.91 18.86C14.79 19.41 14.25 19.76 13.7 19.65C13.14 19.53 12.79 19 12.91 18.43L13.77 14.5C13.86 13.97 14.37 13.6 14.92 13.69C15.46 13.78 15.83 14.3 15.74 14.84C15.74 14.88 15.73 14.91 15.72 14.95L14.91 18.86ZM9.72 21.34C9.33 20.73 9.08 20.05 9 19.34L8.24 16C8.1 15.47 8.41 14.92 9 14.76C9.07 14.75 9.15 14.75 9.22 14.76V3.43002C8.31 3.43002 7.22 2.86002 6.38 3.06002C5.54 3.26002 4.69 4.44002 3.72 4.66002C2.61 4.76002 1.61 5.35002 1 6.28002L6.93 19.28L7.14 20.28C7.5 21.9 9.09 22.92 10.71 22.57H10.81C10.38 22.22 10 21.81 9.72 21.34Z" />
    </Svg>
  );
};
