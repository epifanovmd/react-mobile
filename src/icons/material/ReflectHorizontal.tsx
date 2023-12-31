import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ReflectHorizontalIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.0001 19.9995H14.0001C13.7349 19.9995 13.4805 19.8941 13.293 19.7066C13.1055 19.5191 13.0001 19.2647 13.0001 18.9995V4.9695C13.0001 4.4995 13.3101 4.1195 13.7401 3.9995C14.1901 3.8795 14.6501 4.0795 14.8701 4.4695L22.8901 18.4995C23.0701 18.8095 23.0701 19.1895 22.8901 19.4995C22.7101 19.8095 22.3801 19.9995 22.0001 19.9995ZM2.0001 19.9995C1.6201 19.9995 1.2901 19.8095 1.1101 19.4995C0.930098 19.1895 0.930098 18.8095 1.1101 18.4995L9.1301 4.4695C9.3501 4.0795 9.8101 3.8795 10.2601 3.9995C10.6901 4.1195 11.0001 4.4995 11.0001 4.9695V18.9995C11.0001 19.2647 10.8947 19.5191 10.7072 19.7066C10.5197 19.8941 10.2653 19.9995 10.0001 19.9995H2.0001ZM9.0001 17.9995V8.7395L3.7101 17.9995H9.0001Z" />
    </Svg>
  );
};
