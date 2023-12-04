import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AtlassianIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.92994 11.2401C7.73994 11.0001 7.37995 10.9401 7.12995 11.1301C7.05995 11.1901 6.99995 11.2601 6.95995 11.3401L2.05995 21.1501C1.90995 21.4401 2.02995 21.7901 2.31995 21.9401C2.39995 22.0001 2.49995 22.0001 2.58995 22.0001H9.40995C9.62994 22.0001 9.83994 21.8801 9.93994 21.6801C11.4099 18.6301 10.4999 14.0001 7.92994 11.2401ZM11.5299 2.31011C9.04995 6.14011 8.75995 11.0001 10.7699 15.0901L14.0599 21.6801C14.1699 21.8801 14.3699 22.0001 14.5899 22.0001H21.4099C21.5664 22.0001 21.7165 21.938 21.8271 21.8273C21.9378 21.7167 21.9999 21.5666 21.9999 21.4101C21.9999 21.3201 21.9999 21.2301 21.9399 21.1501C21.9399 21.1501 12.7599 2.77011 12.4999 2.31011C12.3899 2.04011 12.0599 1.92011 11.7799 2.06011C11.6699 2.11011 11.5799 2.20011 11.5299 2.31011Z" />
    </Svg>
  );
};
