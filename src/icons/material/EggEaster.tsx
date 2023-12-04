import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EggEasterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.89 6.36C8.23 3.91 10 2 12 2C14 2 15.77 3.91 17.11 6.36C16.26 6.57 15.5 7.07 15 7.77C13.79 6.11 11.46 5.75 9.8 6.97C9.5 7.19 9.22 7.46 9 7.77C8.5 7.07 7.74 6.57 6.89 6.36ZM15 18.06L12 15.06L9 18.06L6 15.06L4.73 16.33C5.75 20.35 9.83 22.77 13.84 21.76C16.5 21.08 18.59 19 19.27 16.33L18 15.06L15 18.06ZM9 15.94L12 12.94L15 15.94L18 12.94L19.5 14.44C19.37 12.13 18.8 9.86 17.81 7.76C16.65 7.86 15.75 8.83 15.75 10H14.25C14.25 9.40326 14.0129 8.83097 13.591 8.40901C13.169 7.98705 12.5967 7.75 12 7.75C11.4033 7.75 10.831 7.98705 10.409 8.40901C9.98705 8.83097 9.75 9.40326 9.75 10H8.25C8.25 8.83 7.35 7.86 6.19 7.76C5.2 9.86 4.63 12.13 4.5 14.44L6 12.94L9 15.94Z" />
    </Svg>
  );
};
