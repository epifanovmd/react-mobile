import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CookieOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.24999 6.05047L7.44999 4.25047C8.78999 3.46047 10.34 3.00047 12 3.00047C12 3.00047 13 3.00047 13 4.00047V6.00047H14C14 6.00047 15 6.00047 15 7.00047V8.00047H17C17 8.00047 18 8.00047 18 9.00047V10.0005H20C20 10.0005 20.6 10.0005 20.87 10.5005C20.96 11.0005 21 11.5005 21 12.0005C21 13.6605 20.54 15.2205 19.75 16.5505L17.95 14.7505C17.97 14.6705 18 14.5905 18 14.5005C18 13.6705 17.33 13.0005 16.5 13.0005C16.41 13.0005 16.33 13.0305 16.25 13.0505L10.95 7.75047C10.97 7.67047 11 7.59047 11 7.50047C11 6.67047 10.33 6.00047 9.49999 6.00047C9.40999 6.00047 9.32999 6.03047 9.24999 6.05047ZM22.11 21.4605L20.84 22.7305L17.34 19.2305C15.85 20.3405 14 21.0005 12 21.0005C7.02999 21.0005 2.99999 16.9705 2.99999 12.0005C2.99999 10.0005 3.65999 8.15047 4.76999 6.66047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605ZM7.99999 11.5005C7.99999 10.6705 7.32999 10.0005 6.49999 10.0005C5.66999 10.0005 4.99999 10.6705 4.99999 11.5005C4.99999 12.3305 5.66999 13.0005 6.49999 13.0005C7.32999 13.0005 7.99999 12.3305 7.99999 11.5005ZM9.99999 12.5005C9.99999 13.3305 10.67 14.0005 11.5 14.0005C11.68 14.0005 11.85 13.9605 12 13.9005L10.1 12.0005C10.04 12.1505 9.99999 12.3205 9.99999 12.5005ZM12.5 17.5005C12.5 16.6705 11.83 16.0005 11 16.0005C10.17 16.0005 9.49999 16.6705 9.49999 17.5005C9.49999 18.3305 10.17 19.0005 11 19.0005C11.83 19.0005 12.5 18.3305 12.5 17.5005Z" />
    </Svg>
  );
};
