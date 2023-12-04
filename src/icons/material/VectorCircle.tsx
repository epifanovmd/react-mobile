import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorCircleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 2V4.06C6.72 4.92 4.92 6.72 4.05 9H2V15H4.06C4.92 17.28 6.72 19.09 9 19.95V22H15V19.94C17.28 19.08 19.09 17.28 19.95 15H22V9H19.94C19.08 6.72 17.28 4.92 15 4.05V2H9ZM11 4H13V6H11V4ZM9 6.25V8H15V6.25C16.18 6.86 17.14 7.82 17.75 9H16V15H17.75C17.14 16.18 16.18 17.14 15 17.75V16H9V17.75C7.82 17.14 6.86 16.18 6.25 15H8V9H6.25C6.86 7.82 7.82 6.86 9 6.25ZM4 11H6V13H4V11ZM18 11H20V13H18V11ZM11 18H13V20H11" />
    </Svg>
  );
};
