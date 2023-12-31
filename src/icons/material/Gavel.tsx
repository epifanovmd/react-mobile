import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GavelIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.30007 20.28L11.9001 10.68L10.5001 9.25996L9.78007 9.96996C9.39007 10.36 8.76007 10.36 8.37007 9.96996L7.66007 9.25996C7.27007 8.86996 7.27007 8.23996 7.66007 7.84996L13.3201 2.18996C13.7101 1.79996 14.3401 1.79996 14.7301 2.18996L15.4401 2.89996C15.8301 3.28996 15.8301 3.91996 15.4401 4.30996L14.7301 4.99996L16.1501 6.42996C16.5401 6.03996 17.1701 6.03996 17.5601 6.42996C17.9501 6.81996 17.9501 7.45996 17.5601 7.84996L18.9701 9.25996L19.6801 8.54996C20.0701 8.15996 20.7101 8.15996 21.1001 8.54996L21.8001 9.25996C22.1901 9.64996 22.1901 10.29 21.8001 10.68L16.1501 16.33C15.7601 16.72 15.1201 16.72 14.7301 16.33L14.0301 15.63C13.6301 15.24 13.6301 14.6 14.0301 14.21L14.7301 13.5L13.3201 12.09L3.71007 21.7C3.32007 22.09 2.69007 22.09 2.30007 21.7C1.91007 21.31 1.91007 20.67 2.30007 20.28ZM20.0001 19C20.5305 19 21.0392 19.2107 21.4143 19.5857C21.7894 19.9608 22.0001 20.4695 22.0001 21V22H12.0001V21C12.0001 20.4695 12.2108 19.9608 12.5859 19.5857C12.9609 19.2107 13.4696 19 14.0001 19H20.0001Z" />
    </Svg>
  );
};
