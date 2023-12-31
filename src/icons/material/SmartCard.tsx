import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmartCardIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 3H22C22.5249 3.01747 23.0235 3.23379 23.3949 3.60514C23.7662 3.9765 23.9825 4.47512 24 5V19C23.9825 19.5249 23.7662 20.0235 23.3949 20.3949C23.0235 20.7662 22.5249 20.9825 22 21H2C1.47512 20.9825 0.976497 20.7662 0.605143 20.3949C0.23379 20.0235 0.0174689 19.5249 0 19L0 5C0.0174689 4.47512 0.23379 3.9765 0.605143 3.60514C0.976497 3.23379 1.47512 3.01747 2 3ZM8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91ZM8 6C7.40666 6 6.82664 6.17595 6.33329 6.50559C5.83994 6.83524 5.45542 7.30377 5.22836 7.85195C5.0013 8.40013 4.94189 9.00333 5.05764 9.58527C5.1734 10.1672 5.45912 10.7018 5.87868 11.1213C6.29824 11.5409 6.83279 11.8266 7.41473 11.9424C7.99667 12.0581 8.59987 11.9987 9.14805 11.7716C9.69623 11.5446 10.1648 11.1601 10.4944 10.6667C10.8241 10.1734 11 9.59334 11 9C11 8.20435 10.6839 7.44129 10.1213 6.87868C9.55871 6.31607 8.79565 6 8 6ZM17 10V13H21V10H17Z" />
    </Svg>
  );
};
