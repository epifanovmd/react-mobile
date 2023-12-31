import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProgressUploadIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 2.0293C17.73 2.4993 21.5 6.2493 21.9501 10.9993C22.5 16.4993 18.5 21.3793 13 21.9293V19.9293C16.64 19.4993 19.5 16.6093 19.96 12.9693C20.5 8.5793 17.39 4.5893 13 4.0493V2.0493V2.0293ZM11 2.0593V4.0593C9.57005 4.2593 8.22005 4.8393 7.10005 5.7393L5.67005 4.2593C7.19005 2.9993 9.05005 2.2493 11 2.0593ZM4.26005 5.6693L5.69005 7.0993C4.80005 8.2293 4.24005 9.5793 4.05005 10.9993H2.05005C2.25005 9.0393 3.00005 7.1893 4.26005 5.6693ZM2.06005 12.9993H4.06005C4.24005 14.4193 4.81005 15.7693 5.69005 16.8993L4.27005 18.3293C3.03005 16.8093 2.26005 14.9593 2.06005 12.9993ZM7.10005 18.3693C8.23005 19.2493 9.58005 19.8193 11 19.9993V21.9993C9.04005 21.7893 7.18005 20.9993 5.67005 19.7393L7.10005 18.3693ZM12 7.4993L7.50005 11.9993H11V15.9993H13V11.9993H16.5L12 7.4993Z" />
    </Svg>
  );
};
