import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkullScanOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 0C0.9 0 0 0.9 0 2V6H2V2H6V0H2ZM18 0V2H22V6H24V2C24 0.9 23.1 0 22 0H18ZM9.5 13C8.7 13 8 12.3 8 11.5C8 10.7 8.7 10 9.5 10C10.3 10 11 10.7 11 11.5C11 12.3 10.3 13 9.5 13ZM11 15L12 13L13 15H11ZM14.5 13C13.7 13 13 12.3 13 11.5C13 10.7 13.7 10 14.5 10C15.3 10 16 10.7 16 11.5C16 12.3 15.3 13 14.5 13ZM0 18V22C0 23.1 0.9 24 2 24H6V22H2V18H0ZM22 18V22H18V24H22C23.1 24 24 23.1 24 22V18H22ZM12 3C7.6 3 4 6.6 4 11C4 13 4.8 14.9 6 16.3V21H18V16.3C19.2 14.9 20 13.1 20 11C20 6.6 16.4 3 12 3ZM16 15.4V19H14V17H13V19H11V17H10V19H8V15.4C6.8 14.3 6 12.7 6 11C6 7.7 8.7 5 12 5C15.3 5 18 7.7 18 11C18 12.8 17.2 14.3 16 15.4Z" />
    </Svg>
  );
};
