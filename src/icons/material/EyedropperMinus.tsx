import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyedropperMinusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.35 11.7196L17.22 13.8496L15.81 12.4296L8.1 20.1396L3.5 21.9996L2 20.4996L3.86 15.8996L11.57 8.18957L10.15 6.77957L12.28 4.64957L19.35 11.7196ZM16.76 2.99957C17.93 1.82957 19.83 1.82957 21 2.99957C22.17 4.16957 22.17 6.06957 21 7.23957L19.08 9.15957L14.84 4.91957L16.76 2.99957ZM5.56 17.0296L4.5 19.4996L6.97 18.4396L14.4 10.9996L13 9.59957L5.56 17.0296ZM9 3.99957V5.99957H1V3.99957H9Z" />
    </Svg>
  );
};
