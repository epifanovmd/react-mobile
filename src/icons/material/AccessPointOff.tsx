import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccessPointOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.73L12.1001 14C12.0601 14 12.0301 14 12.0001 14C10.9001 14 10.0001 13.11 10.0001 12C10.0001 11.97 10.0001 11.94 10.0001 11.9L8.40011 10.29C8.15011 10.81 8.00011 11.38 8.00011 12C8.00011 13.11 8.45011 14.11 9.17011 14.83L7.76011 16.24C6.67011 15.15 6.00011 13.65 6.00011 12C6.00011 10.83 6.34011 9.74 6.93011 8.82L5.50011 7.37C4.55011 8.67 4.00011 10.27 4.00011 12C4.00011 14.22 4.89011 16.22 6.34011 17.66L4.93011 19.07C3.12011 17.26 2.00011 14.76 2.00011 12C2.00011 9.72 2.77011 7.63 4.06011 5.95L1.11011 3L2.39011 1.73L22.1101 21.46L20.8401 22.73ZM15.9301 12.73L17.5301 14.33C17.8301 13.61 18.0001 12.83 18.0001 12C18.0001 10.35 17.3301 8.85 16.2401 7.76L14.8301 9.17C15.5501 9.89 16.0001 10.89 16.0001 12C16.0001 12.25 15.9701 12.5 15.9301 12.73ZM19.0301 15.83L20.5001 17.28C21.4401 15.75 22.0001 13.94 22.0001 12C22.0001 9.24 20.8801 6.74 19.0701 4.93L17.6601 6.34C19.1101 7.78 20.0001 9.79 20.0001 12C20.0001 13.39 19.6501 14.7 19.0301 15.83Z" />
    </Svg>
  );
};
