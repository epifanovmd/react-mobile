import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlertRhombusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 2C11.5001 2 11.0001 2.19 10.5901 2.59L2.59006 10.59C1.80006 11.37 1.80006 12.63 2.59006 13.41L10.5901 21.41C11.3701 22.2 12.6301 22.2 13.4101 21.41L21.4101 13.41C22.2001 12.63 22.2001 11.37 21.4101 10.59L13.4101 2.59C13.0001 2.19 12.5001 2 12.0001 2ZM11.0001 7H13.0001V13H11.0001V7ZM11.0001 15H13.0001V17H11.0001V15Z" />
    </Svg>
  );
};
