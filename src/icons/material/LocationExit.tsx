import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LocationExitIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 12L18 8V11H10V13H18V16L22 12ZM20 18C18.7407 19.6791 16.985 20.9193 14.9817 21.5451C12.9783 22.1709 10.8288 22.1505 8.83772 21.4868C6.8466 20.8231 5.11478 19.5498 3.88758 17.8471C2.66037 16.1444 2 14.0988 2 12C2 9.90118 2.66037 7.85555 3.88758 6.1529C5.11478 4.45024 6.8466 3.17687 8.83772 2.51317C10.8288 1.84946 12.9783 1.82906 14.9817 2.45486C16.985 3.08067 18.7407 4.32094 20 6H17.27C16.1153 4.98166 14.6913 4.31814 13.1689 4.08906C11.6464 3.85997 10.0902 4.07506 8.68699 4.7085C7.28376 5.34194 6.09312 6.36683 5.25793 7.66019C4.42274 8.95354 3.9785 10.4604 3.9785 12C3.9785 13.5396 4.42274 15.0465 5.25793 16.3398C6.09312 17.6332 7.28376 18.6581 8.68699 19.2915C10.0902 19.9249 11.6464 20.14 13.1689 19.9109C14.6913 19.6819 16.1153 19.0183 17.27 18H20Z" />
    </Svg>
  );
};
