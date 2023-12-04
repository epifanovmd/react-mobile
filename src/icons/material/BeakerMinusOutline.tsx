import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BeakerMinusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 17V19H15V17H23ZM3 3H21V5C19.9 5 19 5.9 19 7V12C18.3 12 17.63 12.12 17 12.34V5H7V7H12V8H7V9H10V10H7V11H10V12H7V13H12V14H7V15H10V16H7V19H13.08C13.2 19.72 13.45 20.39 13.8 21H7C5.9 21 5 20.11 5 19V7C5 5.9 4.11 5 3 5V3Z" />
    </Svg>
  );
};
