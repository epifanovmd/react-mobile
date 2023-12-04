import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CoffeeToGoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 19V17H17L15.26 15.24L16.67 13.83L20.84 18L16.67 22.17L15.26 20.76L17 19H3ZM17 8V5H15V8H17ZM17 3C18.11 3 19 3.9 19 5V8C19 9.11 18.11 10 17 10H15V11C15 12.0609 14.5786 13.0783 13.8284 13.8284C13.0783 14.5786 12.0609 15 11 15H7C5.93913 15 4.92172 14.5786 4.17157 13.8284C3.42143 13.0783 3 12.0609 3 11V3H17Z" />
    </Svg>
  );
};
