import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UbisoftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.4099 2C5.20991 2 2.52991 7.53 2.52991 7.53L3.31991 8.09C3.31991 8.09 2.32991 10 2.34991 12.4C2.34991 17.34 6.28991 22 12.0699 22C17.3299 22 21.6699 17.71 21.6699 12.41C21.6699 5.5 16.3099 2 11.4099 2ZM11.4699 3.69C16.3099 3.69 20.0699 7.6 20.0699 12.14C20.0699 16.95 16.4499 20.3 12.2299 20.3C9.12991 20.3 6.32991 17.94 6.32991 14.7C6.32991 12.82 7.31991 11.5 8.43991 10.82L8.59991 11C8.29991 11.24 7.42991 12.64 7.42991 14C7.42991 16.56 9.42991 18.33 11.9499 18.33C15.1599 18.33 17.2999 15.59 17.2999 12.41C17.2999 8.71 14.0299 5.57 10.0999 5.57C7.92991 5.57 6.08991 6.5 5.02991 7.33L4.85991 7.18C6.24991 5.04 8.64991 3.69 11.4699 3.69ZM9.99991 7.23C12.5299 7.23 14.9699 8.89 15.5899 11.25L15.3599 11.33C14.2699 9.88 12.4699 8.68 10.3499 8.68C6.43991 8.68 4.38991 12.23 4.68991 15.19L4.45991 15.28C4.45991 15.28 4.02991 14.33 4.02991 13.2C4.02991 9.93 6.70991 7.23 9.99991 7.23ZM11.6799 11.33C12.8599 11.33 13.8099 12.3 13.8099 13.44C13.8099 14.38 13.2099 14.94 13.2099 14.94L13.9199 15.45C13.9199 15.45 13.2099 16.57 11.7599 16.57C10.3699 16.57 9.12991 15.44 9.12991 13.93C9.12991 12.38 10.4699 11.33 11.6799 11.33Z" />
    </Svg>
  );
};
