import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SonyPlaystationIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.49994 4.26953C10.8799 4.52953 12.8999 5.13953 13.9999 5.49953C16.7499 6.44953 17.6899 7.62953 17.6899 10.2895C17.6899 12.8895 16.0899 13.8695 14.0499 12.8895V8.04953C14.0499 7.49953 13.9499 6.96953 13.4099 6.81953C12.9999 6.68953 12.7599 7.06953 12.7599 7.62953V19.7295L9.49994 18.6895V4.26953ZM13.3699 17.6195L18.6199 15.7495C19.2199 15.5395 19.3099 15.2395 18.8299 15.0795C18.3399 14.9195 17.4699 14.9695 16.8699 15.1795L13.3699 16.4095V14.4495L13.5799 14.3795C13.5799 14.3795 14.5899 13.9995 15.9999 13.8695C17.4299 13.7095 19.1699 13.8895 20.5299 14.3995C22.0699 14.8895 22.2499 15.6095 21.8599 16.0995C21.4599 16.5995 20.4999 16.9495 20.4999 16.9495L13.3699 19.4995V17.6195ZM3.49994 17.4195C1.92994 16.9995 1.65994 16.0495 2.37994 15.4995C3.04994 14.9995 4.17994 14.6495 4.17994 14.6495L8.85994 12.9995V14.8795L5.49994 16.0895C4.89994 16.2995 4.80994 16.5995 5.28994 16.7595C5.76994 16.9195 6.64994 16.8795 7.23994 16.6595L8.85994 16.0795V17.7695L8.53994 17.8295C6.91994 18.0895 5.19994 17.9995 3.49994 17.4195Z" />
    </Svg>
  );
};
