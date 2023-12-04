import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CashRegisterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 17H22V21H2V17ZM6.25 7H9V6H6V3H14V6H11V7H17.8C18.8 7 19.8 8 20 9L20.5 16H3.5L4.05 9C4.05 8 5.05 7 6.25 7ZM13 9V11H18V9H13ZM6 9V10H8V9H6ZM9 9V10H11V9H9ZM6 11V12H8V11H6ZM9 11V12H11V11H9ZM6 13V14H8V13H6ZM9 13V14H11V13H9ZM7 4V5H13V4H7Z" />
    </Svg>
  );
};
