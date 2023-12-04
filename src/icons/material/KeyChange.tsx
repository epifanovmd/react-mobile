import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyChangeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 2C9.5 2 11.1 3.2 11.7 5H21V8H18V11H15V8H11.7C11.1 9.8 9.4 11 7.5 11C5 11 3 9 3 6.5C3 4 5 2 7.5 2ZM7.5 5C6.7 5 6 5.7 6 6.5C6 7.3 6.7 8 7.5 8C8.3 8 9 7.3 9 6.5C9 5.7 8.3 5 7.5 5ZM7.5 13C9.5 13 11.1 14.2 11.7 16H21V19H20V22H18V19H16V22H13V19H11.7C11.1 20.8 9.4 22 7.5 22C5 22 3 20 3 17.5C3 15 5 13 7.5 13ZM7.5 16C6.7 16 6 16.7 6 17.5C6 18.3 6.7 19 7.5 19C8.3 19 9 18.3 9 17.5C9 16.7 8.3 16 7.5 16Z" />
    </Svg>
  );
};
