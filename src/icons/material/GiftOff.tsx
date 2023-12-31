import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GiftOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.11 3.00047L4.14 6.04047H3C1.9 6.04047 1 6.93047 1 8.04047V10.0405C1 10.5905 1.45 11.0405 2 11.0405H9.15L10.15 12.0405H2V20.0405C2 21.1405 2.9 22.0405 4 22.0405H20C20.05 22.0405 20.09 22.0305 20.13 22.0005L21.56 23.4505L22.83 22.1805L2.39 1.73047L1.11 3.00047ZM11 12.8905L13 14.8905V20.0405H11V12.8905ZM22 12.0405V18.8005L15.24 12.0405H22ZM21 6.04047H17.83C19 2.77047 14.6 0.455469 12.57 3.28047L12 4.04047L11.43 3.26047C10.8 2.37047 9.93 2.00047 9.06 1.97047C8.06 1.96047 7.08 2.50047 6.5 3.30047L8.04 4.84047C8.13 4.38047 8.5 4.04047 9 4.04047C9.89 4.04047 10.34 5.12047 9.71 5.75047C9.56 5.89047 9.39 6.00047 9.21 6.00047L11.24 8.04047H13V9.80047L14.24 11.0405H22C22.55 11.0405 23 10.5905 23 10.0405V8.04047C23 6.93047 22.11 6.04047 21 6.04047ZM15.71 5.75047C15.08 6.38047 14 5.93047 14 5.04047C14 4.50047 14.45 4.04047 15 4.04047C15.89 4.04047 16.34 5.12047 15.71 5.75047Z" />
    </Svg>
  );
};
