import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GlassMugVariantOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.44011 5.24047L7.00011 3.79047C7.71011 3.29047 8.57011 3.00047 9.50011 3.00047C10.5301 3.00047 11.5001 3.35047 12.3201 4.00047H14.0001C16.2101 4.00047 18.0001 5.79047 18.0001 8.00047V10.0005H20.0001C20.5501 10.0005 21.0001 10.4505 21.0001 11.0005V17.8005L19.0001 15.8005V12.0005H17.0001V13.8005L11.2601 8.06047C11.5001 8.00047 11.7301 8.00047 12.0001 8.00047H16.0001C16.0001 6.90047 15.1101 6.00047 14.0001 6.00047H11.5001C11.0301 5.37047 10.2901 5.00047 9.50011 5.00047C9.12011 5.00047 8.76011 5.09047 8.44011 5.24047ZM22.1101 21.4605L20.8401 22.7305L18.1101 20.0005H17.0001V22.0005H6.00011V14.0005C3.79011 14.0005 2.00011 12.2105 2.00011 10.0005C2.00011 8.37047 3.00011 6.94047 4.44011 6.33047L1.11011 3.00047L2.39011 1.73047L7.19011 6.54047L9.61011 8.96047L17.0001 16.3405V16.3505L18.6501 18.0005H18.6601L20.5001 19.8405V19.8505L22.1101 21.4605ZM8.59011 10.5005L6.11011 8.00047H6.00011C4.89011 8.00047 4.00011 8.90047 4.00011 10.0005C4.00011 11.1105 4.89011 12.0005 6.00011 12.0005C6.00011 12.0005 7.68011 12.1305 8.50011 10.6305L8.59011 10.5005Z" />
    </Svg>
  );
};
