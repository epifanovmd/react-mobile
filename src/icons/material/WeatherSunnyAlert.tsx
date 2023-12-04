import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherSunnyAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 7C10.6739 7 9.40211 7.52678 8.46443 8.46447C7.52675 9.40215 6.99997 10.6739 6.99997 12C6.99997 13.3261 7.52675 14.5979 8.46443 15.5355C9.40211 16.4732 10.6739 17 12 17C13.326 17 14.5978 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5978 7.52678 13.326 7 12 7ZM12 15C11.2043 15 10.4413 14.6839 9.87864 14.1213C9.31604 13.5587 8.99997 12.7956 8.99997 12C8.99997 11.2044 9.31604 10.4413 9.87864 9.87868C10.4413 9.31607 11.2043 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM12 2L14.39 5.42C13.65 5.15 12.84 5 12 5C11.16 5 10.35 5.15 9.60997 5.42L12 2ZM3.33997 7L7.49997 6.65C6.89997 7.16 6.35997 7.78 5.93997 8.5C5.49997 9.24 5.24997 10 5.10997 10.79L3.33997 7ZM3.35997 17L5.11997 13.23C5.25997 14 5.52997 14.78 5.94997 15.5C6.36997 16.24 6.90997 16.86 7.49997 17.37L3.35997 17ZM12 22L9.58997 18.56C10.33 18.83 11.14 19 12 19C12.82 19 13.63 18.83 14.37 18.56L12 22ZM19 13V7H21V13H19ZM19 17V15H21V17" />
    </Svg>
  );
};
