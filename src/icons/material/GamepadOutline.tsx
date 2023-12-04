import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GamepadOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 9H2V15H7.5L10.5 12L7.5 9ZM6 13H4V11H6V13ZM15 7.5V2H9V7.5L12 10.5L15 7.5ZM11 4H13V6H11V4ZM9 16.5V22H15V16.5L12 13.5L9 16.5ZM13 20H11V18H13V20ZM16.5 9L13.5 12L16.5 15H22V9H16.5ZM20 13H18V11H20V13Z" />
    </Svg>
  );
};
