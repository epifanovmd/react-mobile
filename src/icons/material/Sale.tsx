import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SaleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.65 2.84945L19.26 6.70945L22.77 8.49945L21 11.9995L22.78 15.4995L19.24 17.2895L18.63 21.1495L14.74 20.5395L11.97 23.2995L9.18997 20.4995L5.32997 21.1395L4.70997 17.2495L1.21997 15.4695L2.99997 11.9695L1.22997 8.49945L4.73997 6.68945L5.34997 2.85945L9.21997 3.49945L12 0.689453L14.77 3.45945L18.65 2.84945ZM9.49997 6.99945C9.10215 6.99945 8.72061 7.15749 8.43931 7.43879C8.15801 7.7201 7.99997 8.10163 7.99997 8.49945C7.99997 8.89728 8.15801 9.27881 8.43931 9.56011C8.72061 9.84142 9.10215 9.99945 9.49997 9.99945C9.89779 9.99945 10.2793 9.84142 10.5606 9.56011C10.8419 9.27881 11 8.89728 11 8.49945C11 8.10163 10.8419 7.7201 10.5606 7.43879C10.2793 7.15749 9.89779 6.99945 9.49997 6.99945ZM14.5 13.9995C14.1021 13.9995 13.7206 14.1575 13.4393 14.4388C13.158 14.7201 13 15.1016 13 15.4995C13 15.8973 13.158 16.2788 13.4393 16.5601C13.7206 16.8414 14.1021 16.9995 14.5 16.9995C14.8978 16.9995 15.2793 16.8414 15.5606 16.5601C15.8419 16.2788 16 15.8973 16 15.4995C16 15.1016 15.8419 14.7201 15.5606 14.4388C15.2793 14.1575 14.8978 13.9995 14.5 13.9995ZM8.40997 16.9995L17 8.40945L15.59 6.99945L6.99997 15.5895L8.40997 16.9995Z" />
    </Svg>
  );
};
