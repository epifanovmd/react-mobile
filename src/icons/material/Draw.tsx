import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DrawIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.74996 20.8504C11.53 20.1504 11.14 18.2204 10.24 17.0004C9.34996 15.7504 8.11996 14.8904 6.87996 14.0604C5.99996 13.5004 5.18996 12.8004 4.53996 12.0004C4.25996 11.6704 3.68996 11.0604 4.26996 10.9404C4.85996 10.8204 5.87996 11.4004 6.39996 11.6204C7.30996 12.0004 8.20996 12.4404 9.04996 12.9604L10.06 11.2604C8.49996 10.2304 6.49996 9.32043 4.63996 9.05043C3.57996 8.89043 2.45996 9.11043 2.09996 10.2604C1.77996 11.2504 2.28996 12.2504 2.86996 13.0304C4.23995 14.8604 6.36996 15.7404 7.95996 17.3204C8.29996 17.6504 8.70996 18.0404 8.90996 18.5004C9.11996 18.9404 9.06996 18.9704 8.59996 18.9704C7.35996 18.9704 5.80996 18.0004 4.79996 17.3604L3.78996 19.0604C5.31996 20.0004 7.87996 21.4704 9.74996 20.8504ZM20.84 5.25043C21.06 5.03043 21.06 4.67043 20.84 4.46043L19.54 3.16043C19.33 2.95043 18.97 2.95043 18.76 3.16043L17.74 4.18043L19.82 6.26043L20.84 5.25043ZM11 10.9204V13.0004H13.08L19.23 6.85043L17.15 4.77043L11 10.9204Z" />
    </Svg>
  );
};
