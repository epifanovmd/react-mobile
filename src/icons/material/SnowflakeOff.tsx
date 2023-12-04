import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SnowflakeOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 5.12047L9.28999 3.41047L10.71 2.00047L12 3.29047L13.29 2.00047L14.71 3.41047L13 5.12047V7.38047L15.45 8.82047L17.45 7.69047L18.07 5.36047L20 5.88047L19.54 7.65047L21.31 8.12047L20.79 10.0505L18.46 9.43047L16.46 10.5605V13.2605L14.5 11.3005V10.5605L12.74 9.54047L10.73 7.53047L11 7.38047V5.12047ZM18.46 14.5705L16.87 13.6705L19.55 16.3505L21.3 15.8805L20.79 13.9505L18.46 14.5705ZM13 16.6205V18.8805L14.7 20.5905L13.29 22.0005L12 20.7105L10.71 22.0005L9.28999 20.5905L11 18.8805V16.6205L8.54999 15.1805L6.54999 16.3105L5.92999 18.6405L3.99999 18.1205L4.46999 16.3605L2.69999 15.8905L3.21999 13.9605L5.54999 14.5805L7.54999 13.4505V10.5605L5.54999 9.43047L3.21999 10.0505L2.69999 8.12047L4.46999 7.65047L3.99999 5.89047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305L14.1 16.0005L13 16.6205ZM12 14.8905L12.63 14.5005L9.49999 11.3905V13.4405L12 14.8905Z" />
    </Svg>
  );
};
