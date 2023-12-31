import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FireAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.66 11.2C15.43 10.9 15.1501 10.64 14.89 10.38C14.22 9.78 13.46 9.35 12.82 8.72C11.33 7.26 11 4.85 11.95 3C11 3.23 10.17 3.75 9.46005 4.32C6.87005 6.4 5.85005 10.07 7.07005 13.22C7.11005 13.32 7.15005 13.42 7.15005 13.55C7.15005 13.77 7.00005 13.97 6.80005 14.05C6.57005 14.15 6.33005 14.09 6.14005 13.93C6.08005 13.88 6.04005 13.83 6.00005 13.76C4.87005 12.33 4.69005 10.28 5.45005 8.64C3.78005 10 2.87005 12.3 3.00005 14.47C3.06005 14.97 3.12005 15.47 3.29005 15.97C3.43005 16.57 3.70005 17.17 4.00005 17.7C5.08005 19.43 6.95005 20.67 8.96005 20.92C11.1 21.19 13.39 20.8 15.03 19.32C16.86 17.66 17.5 15 16.56 12.72L16.43 12.46C16.22 12 15.66 11.2 15.66 11.2ZM12.5 17.5C12.22 17.74 11.76 18 11.4 18.1C10.28 18.5 9.16005 17.94 8.50005 17.28C9.69005 17 10.4 16.12 10.61 15.23C10.78 14.43 10.46 13.77 10.33 13C10.21 12.26 10.23 11.63 10.5 10.94C10.69 11.32 10.89 11.7 11.13 12C11.9 13 13.11 13.44 13.37 14.8C13.41 14.94 13.43 15.08 13.43 15.23C13.46 16.05 13.1 16.95 12.5 17.5ZM21 13H19V7H21V13ZM21 17H19V15H21V17Z" />
    </Svg>
  );
};
