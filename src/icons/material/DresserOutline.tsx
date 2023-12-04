import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DresserOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 3C2.9 3 2 3.9 2 5V18C2 19.11 2.9 20 4 20V21H6V20H18V21H20V20C21.11 20 22 19.11 22 18V5C22 3.9 21.11 3 20 3H4ZM4 5H20V8H4V5ZM10 6V7H14V6H10ZM4 10H20V13H4V10ZM10 11V12H14V11H10ZM4 15H20V18H4V15ZM10 16V17H14V16H10Z" />
    </Svg>
  );
};
