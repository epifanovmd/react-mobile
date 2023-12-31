import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClockInIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.21004 0.790039L0.790039 2.21004L4.80004 6.21004L3.00004 8.00004H8.00004V3.00004L6.21004 4.80004L2.21004 0.790039ZM12 8.00004C8.14004 8.00004 5.00004 11.13 5.00004 15C5.00004 16.8566 5.73754 18.637 7.05029 19.9498C8.36305 21.2625 10.1435 22 12 22C15.86 22 19 18.87 19 15C19 13.1435 18.2625 11.363 16.9498 10.0503C15.637 8.73754 13.8566 8.00004 12 8.00004ZM12 10.15C14.67 10.15 16.85 12.32 16.85 15C16.85 15.637 16.7246 16.2676 16.4809 16.8561C16.2371 17.4445 15.8799 17.9791 15.4295 18.4295C14.9791 18.8799 14.4445 19.2371 13.8561 19.4809C13.2676 19.7246 12.637 19.85 12 19.85C9.32004 19.85 7.15004 17.68 7.15004 15C7.15004 13.7137 7.66102 12.4801 8.57057 11.5706C9.48012 10.661 10.7137 10.15 12 10.15ZM11 12V15.69L14.19 17.53L14.94 16.23L12.5 14.82V12" />
    </Svg>
  );
};
