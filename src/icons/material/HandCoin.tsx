import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandCoinIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.9999 12C18.7599 12 20.9999 9.76 20.9999 7C20.9999 4.24 18.7599 2 15.9999 2C13.2399 2 10.9999 4.24 10.9999 7C10.9999 9.76 13.2399 12 15.9999 12ZM21.4499 17.6C21.0599 17.2 20.5699 17 19.9999 17H12.9999L10.9199 16.27L11.2499 15.33L12.9999 16H15.7999C16.1499 16 16.4299 15.86 16.6599 15.63C16.8899 15.4 16.9999 15.12 16.9999 14.81C16.9999 14.27 16.7399 13.9 16.2199 13.69L8.94989 11H6.99989V20L13.9999 22L22.0299 19C22.0399 18.47 21.8399 18 21.4499 17.6ZM4.99989 11H0.983887V22H4.99989V11Z" />
    </Svg>
  );
};
