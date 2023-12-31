import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CableDataIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.05012 3.4998C5.68012 4.8798 5.68012 7.0998 7.05012 8.4698L15.5401 16.9498C16.1201 17.5398 16.1201 18.4998 15.5401 19.0698C14.9501 19.6598 14.0001 19.6598 13.4101 19.0698L9.17012 14.8298L10.2301 13.7698L6.70012 10.2298L6.34012 10.5898L4.93012 9.1698C4.54012 8.7798 3.91012 8.7798 3.50012 9.1698L2.10012 10.5898C1.71012 10.9998 1.71012 11.6098 2.10012 11.9998L3.50012 13.4098L3.16012 13.7698L6.70012 17.2998L7.76012 16.2398L12.0001 20.4998C13.3701 21.8498 15.5801 21.8498 16.9501 20.4998C18.3201 19.1198 18.3201 16.8998 16.9501 15.5398L8.46012 7.0498C7.88012 6.4598 7.88012 5.4998 8.46012 4.9298C9.05012 4.3398 10.0001 4.3398 10.5901 4.9298L14.8301 9.1698L13.7701 10.2298L17.3001 13.7698L17.6601 13.4098L19.0701 14.8298C19.4601 15.2198 20.1001 15.2198 20.5001 14.8298L21.9001 13.4098C22.2901 12.9998 22.2901 12.3898 21.9001 11.9998L20.5001 10.5898L20.8401 10.2298L17.3001 6.6998L16.2401 7.7598L12.0001 3.4998C10.6301 2.1498 8.42012 2.1498 7.05012 3.4998ZM2.81012 11.2898L4.22012 9.8798L5.64012 11.2898L4.22012 12.7098L2.81012 11.2898ZM18.3601 12.7098L19.7801 11.2898L21.1901 12.7098L19.7801 14.1198L18.3601 12.7098Z" />
    </Svg>
  );
};
