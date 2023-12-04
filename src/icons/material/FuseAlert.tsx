import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FuseAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 7V17H13V7H6ZM9.16 16V12.87H7.41L9.91 8V11.14H11.59L9.16 16ZM14 2V6H5V2C5 1.45 5.45 1 6 1H13C13.55 1 14 1.45 14 2ZM14 18V22C14 22.55 13.55 23 13 23H6C5.45 23 5 22.55 5 22V18H14ZM19 13H17V7H19V13ZM19 17H17V15H19V17Z" />
    </Svg>
  );
};
