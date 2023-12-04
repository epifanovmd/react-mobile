import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CodeParenthesesBoxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17.3L8.4 18C6.9 16.5 6 14.3 6 12C6 9.7 6.9 7.5 8.4 6L10 6.7C8.7 7.9 8 9.9 8 12C8 14.1 8.7 16.1 10 17.3ZM15.6 18L14 17.3C15.3 16 16 14.1 16 12C16 9.9 15.3 7.9 14 6.7L15.6 6C17.1 7.5 18 9.7 18 12C18 14.3 17.1 16.5 15.6 18Z" />
    </Svg>
  );
};
