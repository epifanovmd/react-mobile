import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GestureSwipeUpIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 9C10 8.73478 10.1054 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8C11.2652 8 11.5196 8.10536 11.7071 8.29289C11.8946 8.48043 12 8.73478 12 9V13.47L13.21 13.6L18.15 15.79C18.68 16.03 19 16.56 19 17.14V21.5C18.97 22.32 18.32 22.97 17.5 23H11C10.62 23 10.26 22.85 10 22.57L5.1 18.37L5.84 17.6C6.03 17.39 6.3 17.28 6.58 17.28H6.8L10 19V9ZM7 6L4 3L1 6H3V12H5V6H7Z" />
    </Svg>
  );
};
