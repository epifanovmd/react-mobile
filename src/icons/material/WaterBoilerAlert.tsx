import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterBoilerAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 2C4.89 2 4 2.89 4 4V16C4 17.11 4.89 18 6 18H7V20H4V22H7C8.11 22 9 21.11 9 20V18H11V20C11 21.11 11.89 22 13 22H16V20H13V18H14C15.11 18 16 17.11 16 16V4C16 2.89 15.11 2 14 2H6ZM10 4.97C11.11 4.97 12 5.87 12 6.97C12 8.07 11.11 8.97 10 8.97C8.9 8.97 8 8.07 8 6.97C8 5.87 8.9 4.97 10 4.97ZM8 14.5H12V16H8V14.5ZM18 15H20V17H18V15ZM18 7H20V13H18V7Z" />
    </Svg>
  );
};
