import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GateXnorIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 4C5 10 5 14 2 20H4C7 14 7 10 4.1 4H2ZM6 4C9 10 9 14 6 20H9C12.2 20 14.8 16.8 16.7 14C17.28 14.65 18.12 15 19 15C19.7956 15 20.5587 14.6839 21.1213 14.1213C21.6839 13.5587 22 12.7956 22 12C22 11.2044 21.6839 10.4413 21.1213 9.87868C20.5587 9.31607 19.7956 9 19 9C18.12 9 17.28 9.35 16.7 10C14.7 7.2 12.2 4 9 4H6ZM9 6C12 6 14 10 15.5 12C14 14 12 18 9 18C10.6 14 10.6 10 9 6ZM19 11C19.5 11 20 11.5 20 12C20 12.5 19.5 13 19 13C18.7348 13 18.4804 12.8946 18.2929 12.7071C18.1054 12.5196 18 12.2652 18 12C18 11.5 18.5 11 19 11Z" />
    </Svg>
  );
};
