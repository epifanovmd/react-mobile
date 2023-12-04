import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableAccountIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 3H18C19.11 3 20 3.9 20 5V12.08C18.45 11.82 16.92 12.18 15.68 13H12V17H13.08C12.97 17.68 12.97 18.35 13.08 19H4C2.9 19 2 18.11 2 17V5C2 3.9 2.9 3 4 3ZM4 7V11H10V7H4ZM12 7V11H18V7H12ZM4 13V17H10V13H4ZM23 22V21C23 19.67 20.33 19 19 19C17.67 19 15 19.67 15 21V22H23ZM19 14C17.9 14 17 14.9 17 16C17 17.1 17.9 18 19 18C20.1 18 21 17.11 21 16C21 14.89 20.11 14 19 14Z" />
    </Svg>
  );
};
