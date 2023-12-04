import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MixedMartialArtsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 10V7H7V10H15ZM18 7C18.28 7 18.5 7.09 18.7 7.29C18.89 7.5 19 7.73 19 8V10.78C19 10.97 18.97 11.11 18.94 11.2L18.14 15.19C18 15.72 17.7 16 17.2 16H6.8C6.27 16 5.95 15.72 5.86 15.19L5.06 11.2C5.03 11.11 5 10.97 5 10.78V5C5 4.5 5.21 4 5.6 3.61C6 3.2 6.45 3 7 3H15C15.53 3 16 3.2 16.41 3.61C16.81 4 17 4.5 17 5V8C17 7.73 17.11 7.5 17.3 7.29C17.5 7.09 17.72 7 18 7ZM7 20V17H17V20C17 20.3 16.91 20.53 16.71 20.72C16.5 20.91 16.27 21 16 21H8C7.73 21 7.5 20.91 7.29 20.72C7.09 20.53 7 20.3 7 20Z" />
    </Svg>
  );
};
