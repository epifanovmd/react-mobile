import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BorderLeftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 5H17V3H15V5ZM15 13H17V11H15V13ZM19 21H21V19H19V21ZM19 13H21V11H19V13ZM19 5H21V3H19V5ZM19 17H21V15H19V17ZM15 21H17V19H15V21ZM19 9H21V7H19V9ZM3 21H5V3H3V21ZM7 13H9V11H7V13ZM7 5H9V3H7V5ZM7 21H9V19H7V21ZM11 13H13V11H11V13ZM11 9H13V7H11V9ZM11 5H13V3H11V5ZM11 17H13V15H11V17ZM11 21H13V19H11V21Z" />
    </Svg>
  );
};
