import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ApplicationVariableIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2ZM7.4 20C5.9 18.6 5 16.6 5 14.5C5 12.4 5.9 10.4 7.4 9L9 9.6C7.7 10.7 7 12.6 7 14.5C7 16.4 7.7 18.2 9 19.4L7.4 20ZM12.7 18L11.9 16L10.5 18H9L11.3 14.9L10 12H11.3L12.1 14L13.5 12H15L12.8 15L14.1 18H12.7ZM16.6 20L15 19.4C16.3 18.2 17 16.4 17 14.5C17 12.6 16.3 10.8 15 9.6L16.6 9C18.1 10.4 19 12.4 19 14.5C19 16.6 18.1 18.6 16.6 20ZM21 7H3V4H21V7Z" />
    </Svg>
  );
};
