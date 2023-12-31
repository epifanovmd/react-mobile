import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AppleIosIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.09 16.8H3.75V9.76004H2.09V16.8ZM2.92 8.84004C3.44 8.84004 3.84 8.44004 3.84 7.94004C3.84 7.44004 3.44 7.04004 2.92 7.04004C2.4 7.04004 2 7.44004 2 7.94004C2 8.44004 2.4 8.84004 2.92 8.84004ZM9.25 7.06004C6.46 7.06004 4.7 8.96004 4.7 12C4.7 15.06 6.46 16.96 9.25 16.96C12.04 16.96 13.8 15.06 13.8 12C13.8 8.96004 12.04 7.06004 9.25 7.06004ZM9.25 8.50004C10.96 8.50004 12.05 9.87004 12.05 12C12.05 14.15 10.96 15.5 9.25 15.5C7.54 15.5 6.46 14.15 6.46 12C6.46 9.87004 7.54 8.50004 9.25 8.50004ZM14.5 14.11C14.57 15.87 16 16.96 18.22 16.96C20.54 16.96 22 15.82 22 14C22 12.57 21.18 11.77 19.23 11.32L18.13 11.07C16.95 10.79 16.47 10.42 16.47 9.78004C16.47 9.00004 17.2 8.45004 18.28 8.45004C19.38 8.45004 20.13 9.00004 20.21 9.89004H21.84C21.8 8.20004 20.41 7.06004 18.29 7.06004C16.21 7.06004 14.73 8.21004 14.73 9.91004C14.73 11.28 15.56 12.13 17.33 12.53L18.57 12.82C19.78 13.11 20.27 13.5 20.27 14.2C20.27 15 19.47 15.57 18.31 15.57C17.15 15.57 16.26 15 16.16 14.11H14.5Z" />
    </Svg>
  );
};
