import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CartOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.73 22.73L1.27 1.27002L0 2.54002L4.39 6.93002L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 15.5305 5.21071 16.0392 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H14.46L15.84 18.38C15.34 18.74 15 19.33 15 20C15 20.5305 15.2107 21.0392 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.67 22 18.26 21.67 18.62 21.16L21.46 24L22.73 22.73ZM7.42 15C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75L7.2 14.63L8.1 13H10.46L12.46 15H7.42ZM15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.50002C20.96 5.34002 21 5.17002 21 5.00002C21 4.7348 20.8946 4.48045 20.7071 4.29291C20.5196 4.10538 20.2652 4.00002 20 4.00002H6.54L15.55 13ZM7 18C6.46957 18 5.96086 18.2107 5.58579 18.5858C5.21071 18.9609 5 19.4696 5 20C5 20.5305 5.21071 21.0392 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0392 9 20.5305 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" />
    </Svg>
  );
};
