import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HvacOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L3.00011 4.89047V21.0005H19.1101L20.8401 22.7305L22.1101 21.4605ZM12.0001 18.0005C8.67011 18.0005 6.00011 15.3305 6.00011 12.0005C6.00011 10.8205 6.34011 9.73047 6.92011 8.81047L8.43011 10.3205C8.24011 10.6905 8.10011 11.0905 8.06011 11.5005H9.61011L10.6101 12.5005H8.06011C8.11011 13.0305 8.30011 13.5505 8.58011 14.0005H12.1101L13.1101 15.0005H9.38011C10.0801 15.6105 10.9701 16.0005 12.0001 16.0005C12.6301 16.0005 13.1901 15.8405 13.7001 15.5905L15.1901 17.0805C14.2701 17.6605 13.1801 18.0005 12.0001 18.0005ZM12.0001 8.00047C13.0301 8.00047 13.9201 8.39047 14.6301 9.00047H12.2001L11.2701 8.07047C11.5001 8.03047 11.7501 8.00047 12.0001 8.00047ZM9.67011 6.47047L6.20011 3.00047H21.0001V17.8005L17.5301 14.3305C17.8301 13.6205 18.0001 12.8305 18.0001 12.0005C18.0001 8.67047 15.3301 6.00047 12.0001 6.00047C11.1701 6.00047 10.3801 6.17047 9.67011 6.47047ZM15.9401 11.5005H14.7001L13.2001 10.0005H15.4201C15.7001 10.4505 15.8901 10.9705 15.9401 11.5005Z" />
    </Svg>
  );
};
