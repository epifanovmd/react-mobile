import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldAccountVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 11C17.3 11 17.7 11 18 11.1V6.3L10.5 3L3 6.3V11.2C3 15.7 6.2 20 10.5 21C11.1 20.9 11.6 20.7 12.1 20.5C11.4 19.5 11 18.3 11 17C11 13.7 13.7 11 17 11ZM17 13C14.8 13 13 14.8 13 17C13 19.2 14.8 21 17 21C19.2 21 21 19.2 21 17C21 14.8 19.2 13 17 13ZM17 14.4C17.6 14.4 18.1 14.9 18.1 15.5C18.1 16.1 17.6 16.6 17 16.6C16.4 16.6 15.9 16.1 15.9 15.5C15.9 14.9 16.4 14.4 17 14.4ZM17 19.8C16.1 19.8 15.3 19.3 14.8 18.6C14.9 17.9 16.3 17.5 17 17.5C17.7 17.5 19.2 17.9 19.2 18.6C18.7 19.3 17.9 19.8 17 19.8Z" />
    </Svg>
  );
};
