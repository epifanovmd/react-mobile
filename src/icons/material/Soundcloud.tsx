import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SoundcloudIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.56 8.87094V17.0009H20.32C22.17 16.8709 23 15.7309 23 14.3309C23 12.8509 21.88 11.6609 20.38 11.6609C20 11.6609 19.68 11.7409 19.35 11.8809C19.11 9.54094 17.12 7.71094 14.67 7.71094C13.5 7.71094 12.39 8.15094 11.56 8.87094ZM10.68 9.89094C10.38 9.71094 10.06 9.57094 9.71 9.50094V17.0009H11.1V9.34094C10.95 9.50094 10.81 9.70094 10.68 9.89094ZM8.33 9.35094V17.0009H9.25V9.38094C9.06 9.35094 8.87 9.34094 8.67 9.34094C8.55 9.34094 8.44 9.34094 8.33 9.35094ZM6.5 10.0009V17.0009H7.41V9.54094C7.08 9.65094 6.77 9.81094 6.5 10.0009ZM4.83 12.5009C4.77 12.5009 4.71 12.4409 4.64 12.4109V17.0009H5.56V10.8609C5.19 11.3409 4.94 11.9109 4.83 12.5009ZM2.79 12.2209V16.9109C3 16.9709 3.24 17.0009 3.5 17.0009H3.72V12.1409C3.64 12.1309 3.56 12.1209 3.5 12.1209C3.24 12.1209 3 12.1609 2.79 12.2209ZM1 14.5609C1 15.3109 1.34 15.9709 1.87 16.4209V12.7109C1.34 13.1509 1 13.8209 1 14.5609Z" />
    </Svg>
  );
};
