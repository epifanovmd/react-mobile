import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SwordCrossIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.20005 2.43945L18.1001 14.3395L20.2201 12.2195L21.6301 13.6295L19.1601 16.0995L22.3401 19.2795C22.7301 19.6695 22.7301 20.2995 22.3401 20.6895L21.6301 21.3995C21.2401 21.7895 20.6101 21.7895 20.2201 21.3995L17.0001 18.2295L14.5601 20.6995L13.1501 19.2895L15.2701 17.1695L3.37005 5.26945V2.43945H6.20005ZM15.8901 9.99945L20.6301 5.25945V2.43945H17.8001L13.0601 7.17945L15.8901 9.99945ZM10.9401 14.9995L8.11005 12.1295L5.90005 14.3395L3.78005 12.2195L2.37005 13.6295L4.84005 16.0995L1.66005 19.2895C1.27005 19.6795 1.27005 20.3095 1.66005 20.6995L2.37005 21.4095C2.76005 21.7995 3.39005 21.7995 3.78005 21.4095L7.00005 18.2295L9.44005 20.6995L10.8501 19.2895L8.73005 17.1695L10.9401 14.9995Z" />
    </Svg>
  );
};
