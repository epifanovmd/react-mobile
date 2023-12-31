import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ElectricSwitchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 11.0001H3.17C3.58 9.83012 4.69 9.00012 6 9.00012C6.65 9.00012 7.25 9.21012 7.74 9.56012L14.44 4.87012L15.58 6.50012L8.89 11.2001C8.96 11.4501 9 11.7201 9 12.0001C9 12.7958 8.68393 13.5588 8.12132 14.1214C7.55871 14.684 6.79565 15.0001 6 15.0001C4.69 15.0001 3.58 14.1701 3.17 13.0001H1V11.0001ZM23 11.0001V13.0001H20.83C20.42 14.1701 19.31 15.0001 18 15.0001C17.2044 15.0001 16.4413 14.684 15.8787 14.1214C15.3161 13.5588 15 12.7958 15 12.0001C15 11.2045 15.3161 10.4414 15.8787 9.8788C16.4413 9.31619 17.2044 9.00012 18 9.00012C19.31 9.00012 20.42 9.83012 20.83 11.0001H23ZM6 11.0001C5.73478 11.0001 5.48043 11.1055 5.29289 11.293C5.10536 11.4805 5 11.7349 5 12.0001C5 12.2653 5.10536 12.5197 5.29289 12.7072C5.48043 12.8948 5.73478 13.0001 6 13.0001C6.26522 13.0001 6.51957 12.8948 6.70711 12.7072C6.89464 12.5197 7 12.2653 7 12.0001C7 11.7349 6.89464 11.4805 6.70711 11.293C6.51957 11.1055 6.26522 11.0001 6 11.0001ZM18 11.0001C17.7348 11.0001 17.4804 11.1055 17.2929 11.293C17.1054 11.4805 17 11.7349 17 12.0001C17 12.2653 17.1054 12.5197 17.2929 12.7072C17.4804 12.8948 17.7348 13.0001 18 13.0001C18.2652 13.0001 18.5196 12.8948 18.7071 12.7072C18.8946 12.5197 19 12.2653 19 12.0001C19 11.7349 18.8946 11.4805 18.7071 11.293C18.5196 11.1055 18.2652 11.0001 18 11.0001Z" />
    </Svg>
  );
};
