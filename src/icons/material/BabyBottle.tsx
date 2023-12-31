import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BabyBottleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.28 2.79995L10.78 3.29995C10.1201 2.93199 9.39158 2.7039 8.63973 2.62992C7.88787 2.55594 7.12883 2.63765 6.40995 2.86995L6.32995 2.79995C5.85367 2.3742 5.23247 2.14693 4.59388 2.1648C3.9553 2.18267 3.34778 2.44433 2.89605 2.89605C2.44433 3.34778 2.18267 3.9553 2.1648 4.59388C2.14693 5.23247 2.3742 5.85367 2.79995 6.32995L2.86995 6.40995C2.63765 7.12883 2.55594 7.88787 2.62992 8.63973C2.7039 9.39158 2.93199 10.1201 3.29995 10.78L2.79995 11.28C2.51905 11.5612 2.36127 11.9424 2.36127 12.34C2.36127 12.7375 2.51905 13.1187 2.79995 13.4L4.20995 14.82C4.4912 15.1009 4.87245 15.2586 5.26995 15.2586C5.66745 15.2586 6.0487 15.1009 6.32995 14.82L6.67995 14.46L13.76 21.53C14.0412 21.8109 14.4224 21.9686 14.82 21.9686C15.2175 21.9686 15.5987 21.8109 15.88 21.53L21.53 15.88C21.8109 15.5987 21.9686 15.2175 21.9686 14.82C21.9686 14.4224 21.8109 14.0412 21.53 13.76L14.46 6.67995L14.82 6.32995C15.1009 6.0487 15.2586 5.66745 15.2586 5.26995C15.2586 4.87245 15.1009 4.4912 14.82 4.20995L13.4 2.79995C13.1187 2.51905 12.7375 2.36127 12.34 2.36127C11.9424 2.36127 11.5612 2.51905 11.28 2.79995ZM13.76 5.26995L5.26995 13.76L3.85995 12.34L12.34 3.85995L13.76 5.26995ZM14.82 11.63L11.63 14.82L10.57 13.76L13.76 10.57L14.82 11.63ZM16.94 13.76L13.76 16.94L12.6899 15.88L15.88 12.6899L16.94 13.76Z" />
    </Svg>
  );
};
