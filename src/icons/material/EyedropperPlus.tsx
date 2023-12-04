import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyedropperPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.35 11.72L17.22 13.85L15.81 12.43L8.1 20.14L3.5 22L2 20.5L3.86 15.9L11.57 8.19L10.15 6.78L12.28 4.65L19.35 11.72ZM16.76 3C17.93 1.83 19.83 1.83 21 3C22.17 4.17 22.17 6.07 21 7.24L19.08 9.16L14.84 4.92L16.76 3ZM5.56 17.03L4.5 19.5L6.97 18.44L14.4 11L13 9.6L5.56 17.03ZM6 1V4H9V6H6V9H4V6H1V4H4V1H6Z" />
    </Svg>
  );
};
