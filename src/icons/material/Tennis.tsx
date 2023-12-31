import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TennisIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.0001 14.9992C19.0609 14.9992 20.0783 15.4206 20.8285 16.1707C21.5786 16.9209 22.0001 17.9383 22.0001 18.9992C22.0001 20.06 21.5786 21.0774 20.8285 21.8276C20.0783 22.5777 19.0609 22.9992 18.0001 22.9992C16.9392 22.9992 15.9218 22.5777 15.1716 21.8276C14.4215 21.0774 14.0001 20.06 14.0001 18.9992C14.0001 17.9383 14.4215 16.9209 15.1716 16.1707C15.9218 15.4206 16.9392 14.9992 18.0001 14.9992ZM18.0001 16.9992C17.4696 16.9992 16.9609 17.2099 16.5858 17.585C16.2108 17.96 16.0001 18.4687 16.0001 18.9992C16.0001 19.5296 16.2108 20.0383 16.5858 20.4134C16.9609 20.7885 17.4696 20.9992 18.0001 20.9992C18.5305 20.9992 19.0392 20.7885 19.4143 20.4134C19.7893 20.0383 20.0001 19.5296 20.0001 18.9992C20.0001 18.4687 19.7893 17.96 19.4143 17.585C19.0392 17.2099 18.5305 16.9992 18.0001 16.9992ZM6.05006 14.5392C6.05006 14.5392 7.46006 13.1192 7.47006 10.2992C7.11006 8.10917 7.97006 5.53917 9.94006 3.57917C12.8701 0.649166 17.1401 0.169166 19.5001 2.49917C21.8301 4.85917 21.3501 9.12917 18.4201 12.0592C16.4601 14.0292 13.8901 14.8892 11.7001 14.5292C8.88006 14.5392 7.46006 15.9492 7.46006 15.9492L3.22006 20.1892L1.81006 18.7792L6.05006 14.5392ZM18.0701 3.92917C16.5001 2.36917 13.5001 2.83917 11.3501 4.99917C9.21006 7.13917 8.73006 10.1492 10.2901 11.7092C11.8601 13.2692 14.8601 12.7892 17.0001 10.6492C19.1601 8.49917 19.6301 5.49917 18.0701 3.92917Z" />
    </Svg>
  );
};
