import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const JellyfishIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.5001 14.5C18.9201 14.43 18.4301 14.92 18.5001 15.5C18.5001 16.17 17.5001 16.17 17.5001 15.5V13.2L19.2001 12.7C19.9201 12.36 20.4101 11.68 20.5001 10.9C20.5001 5.5 16.7001 2 12.0001 2C7.30009 2 3.50009 5.5 3.50009 10.9C3.56009 11.7 4.06009 12.4 4.80009 12.7L6.50009 13.2V15.5C6.50009 15.6326 6.44741 15.7598 6.35364 15.8536C6.25988 15.9473 6.1327 16 6.00009 16C5.86748 16 5.7403 15.9473 5.64654 15.8536C5.55277 15.7598 5.50009 15.6326 5.50009 15.5C5.57009 14.92 5.08009 14.43 4.50009 14.5C3.92009 14.43 3.43009 14.92 3.50009 15.5C3.44009 16.91 4.59009 18.06 6.00009 18C7.41009 18.06 8.56009 16.91 8.50009 15.5V13.7H9.50009V19.4C9.50009 20.07 8.50009 20.07 8.50009 19.4C8.57009 18.82 8.08009 18.33 7.50009 18.4C6.92009 18.33 6.43009 18.82 6.50009 19.4C6.38009 20.84 7.55009 22.07 9.00009 22C10.4101 22.06 11.5601 20.91 11.5001 19.5V14H12.5001V19.5C12.4401 20.91 13.5901 22.06 15.0001 22C16.4101 22.06 17.5601 20.91 17.5001 19.5C17.5001 18.17 15.5001 18.17 15.5001 19.5C15.5001 20.17 14.5001 20.17 14.5001 19.5V13.8H15.5001V15.6C15.5001 16.96 16.6301 18.06 18.0001 18C19.4101 18.06 20.5601 16.91 20.5001 15.5C20.5701 14.92 20.0801 14.43 19.5001 14.5ZM10.6001 4.7C9.09009 5.03 7.79009 5.97 7.00009 7.3C6.83009 7.5 6.50009 7.57 6.30009 7.4C6.08009 7.23 6.04009 6.92 6.20009 6.7C7.16009 5.19 8.67009 4.12 10.4001 3.7C10.6701 3.68 10.9101 3.85 11.0001 4.1C11.0601 4.37 10.8801 4.65 10.6001 4.7Z" />
    </Svg>
  );
};
