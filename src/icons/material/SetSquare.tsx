import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SetSquareIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.7 17.7L16.6 18.8L15.9 18L17 17L15 15L14 16.1L13.3 15.4L14.4 14.3L12.5 12.4L11.4 13.5L10.7 12.8L11.8 11.7L9.8 9.8L8.7 10.9L8 10.2L9 9L7.1 7.1L6 8.1L5.3 7.4L6.4 6.3L4 4V20H20L17.7 17.7ZM7 17V11.2L12.8 17H7Z" />
    </Svg>
  );
};
