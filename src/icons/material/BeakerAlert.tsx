import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BeakerAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 3H21V5C19.9 5 19 5.9 19 7V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V7C5 5.9 4.1 5 3 5V3ZM7 9V10H10V9H7ZM7 11V12H10V11H7ZM10 16V15H7V16H10ZM12 14V13H7V14H12ZM12 8V7H7V8H12ZM21 13V7H23V13H21ZM21 17V15H23V17H21Z" />
    </Svg>
  );
};
