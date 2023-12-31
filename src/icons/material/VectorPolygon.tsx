import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorPolygonIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 2V8H4.28L5.57 16H4V22H10V20.06L15 20.05V22H21V16H19.17L20 9H22V3H16V6.53L14.8 8H9.59L8 5.82V2H2ZM4 4H6V6H4V4ZM18 5H20V7H18V5ZM6.31 8H7.11L9 10.59V14H15V10.91L16.57 9H18L17.16 16H15V18.06H10V16H7.6L6.31 8ZM11 10H13V12H11V10ZM6 18H8V20H6V18ZM17 18H19V20H17" />
    </Svg>
  );
};
