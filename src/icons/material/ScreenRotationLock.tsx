import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScreenRotationLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.8 2.5C16.8 1.56 17.56 0.8 18.5 0.8C19.44 0.8 20.2 1.56 20.2 2.5V3H16.8V2.5ZM16 9H21C21.2652 9 21.5196 8.89464 21.7071 8.70711C21.8946 8.51957 22 8.26522 22 8V4C22 3.73478 21.8946 3.48043 21.7071 3.29289C21.5196 3.10536 21.2652 3 21 3V2.5C21 1.83696 20.7366 1.20107 20.2678 0.732233C19.7989 0.263392 19.163 0 18.5 0C17.837 0 17.2011 0.263392 16.7322 0.732233C16.2634 1.20107 16 1.83696 16 2.5V3C15.7348 3 15.4804 3.10536 15.2929 3.29289C15.1054 3.48043 15 3.73478 15 4V8C15 8.26522 15.1054 8.51957 15.2929 8.70711C15.4804 8.89464 15.7348 9 16 9ZM8.47 20.5C5.2 18.94 2.86 15.76 2.5 12H1C1.5 18.16 6.66 23 12.95 23L13.61 22.97L9.8 19.15L8.47 20.5ZM23.25 12.77L20.68 10.2L19.27 11.61L21.5 13.83L15.83 19.5L4.5 8.17L10.17 2.5L12.27 4.61L13.68 3.2L11.23 0.75C10.64 0.16 9.69 0.16 9.11 0.75L2.75 7.11C2.16 7.7 2.16 8.65 2.75 9.23L14.77 21.25C15.36 21.84 16.31 21.84 16.89 21.25L23.25 14.89C23.84 14.3 23.84 13.35 23.25 12.77Z" />
    </Svg>
  );
};
