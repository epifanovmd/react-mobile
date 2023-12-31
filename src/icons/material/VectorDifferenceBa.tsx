import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorDifferenceBaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 22C21.11 22 22 21.11 22 20V18H20V20H18V22H20ZM16 22V20H13V22H16ZM11 22V20H9V18H7V20C7 21.11 7.89 22 9 22H11ZM22 16V13H20V16H22ZM9 16C9 16 9 11.33 9 9C11.33 9 16 9 16 9C16 9 16 5 16 3C16 1.89 15.11 1 14 1H3C1.89 1 1 1.89 1 3V14C1 15.11 1.89 16 3 16C5 16 9 16 9 16ZM7 14H3V3H14V7H9C7.89 7 7 7.89 7 9V14ZM22 11V9C22 7.89 21.11 7 20 7H18V9H20V11H22Z" />
    </Svg>
  );
};
