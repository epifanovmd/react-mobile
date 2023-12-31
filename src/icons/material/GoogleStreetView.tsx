import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleStreetViewIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.9499 9.27C13.9599 9.27 15.5899 7.64 15.5899 5.63C15.5899 3.63 13.9599 2 11.9499 2C9.93988 2 8.31988 3.63 8.31988 5.63C8.31988 7.64 9.93988 9.27 11.9499 9.27ZM9.35988 12.97C9.35988 12.97 8.26989 15.94 7.95989 16.5C7.84989 16.71 7.86988 16.77 7.59988 16.77C7.32988 16.77 6.90988 16.5 6.90988 16.5C6.90988 16.5 6.70988 16.37 6.78988 16.14C7.02988 15.4 8.11989 11.08 8.34989 10.25C8.59989 9.36 9.27988 9.39 9.27988 9.39H9.92989L12.0299 13.04L14.1399 9.39H14.9199C14.9199 9.39 15.2299 9.43 15.4599 9.7C15.6999 9.97 15.7499 10.44 15.7499 10.44L17.1399 15.84C17.1399 15.84 17.2399 16.22 17.2099 16.33C17.1699 16.5 17.0799 16.5 17.0799 16.5C17.0799 16.5 16.6899 16.62 16.4699 16.69C16.0699 16.82 15.9999 16.44 15.9999 16.44L14.6999 13.04L14.5499 22H12.5999L12.2699 16.89C12.2699 16.89 12.2099 16.76 12.0299 16.76C11.8599 16.76 11.7999 16.89 11.7999 16.89L11.4499 22H9.49989L9.36988 12.97H9.35988Z" />
    </Svg>
  );
};
