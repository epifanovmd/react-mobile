import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MathTanIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 7V9H4V17H6V9H8V7H2ZM11 7C10.4696 7 9.96086 7.21071 9.58579 7.58579C9.21071 7.96086 9 8.46957 9 9V17H11V13H13V17H15V9C15 8.46957 14.7893 7.96086 14.4142 7.58579C14.0391 7.21071 13.5304 7 13 7H11ZM11 9H13V11H11V9ZM16 7V17H18V12L20 17H22V7H20V12L18 7H16Z" />
    </Svg>
  );
};
