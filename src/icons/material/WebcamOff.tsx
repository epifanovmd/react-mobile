import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WebcamOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 6.00047C13.6601 6.00047 15.0001 7.34047 15.0001 9.00047C15.0001 9.78047 14.7001 10.5005 14.2101 11.0005L10.0001 6.79047C10.5001 6.30047 11.2201 6.00047 12.0001 6.00047ZM12.0001 4.00047C14.7601 4.00047 17.0001 6.24047 17.0001 9.00047C17.0001 10.3305 16.4701 11.5305 15.6201 12.4205L17.0401 13.8405C18.2501 12.5905 19.0001 10.8805 19.0001 9.00047C19.0001 5.13047 15.8701 2.00047 12.0001 2.00047C10.1201 2.00047 8.41011 2.75047 7.16011 3.96047L8.58011 5.38047C9.47011 4.53047 10.6701 4.00047 12.0001 4.00047ZM22.1101 21.4605L20.8401 22.7305L19.4601 21.3505C19.1001 21.7505 18.5801 22.0005 18.0001 22.0005H6.00011C4.89011 22.0005 4.00011 21.1105 4.00011 20.0005C4.00011 19.6205 4.10011 19.2705 4.29011 18.9705L6.11011 15.8105C7.69011 17.1705 9.75011 18.0005 12.0001 18.0005C13.2101 18.0005 14.3701 17.7505 15.4301 17.3205L13.8501 15.7405C13.2601 15.9105 12.6401 16.0005 12.0001 16.0005C8.13011 16.0005 5.00011 12.8705 5.00011 9.00047C5.00011 8.36047 5.09011 7.74047 5.26011 7.15047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM12.1001 14.0005L7.00011 8.90047C7.00011 8.93047 7.00011 8.97047 7.00011 9.00047C7.00011 11.7605 9.24011 14.0005 12.0001 14.0005C12.0301 14.0005 12.0701 14.0005 12.1001 14.0005Z" />
    </Svg>
  );
};
