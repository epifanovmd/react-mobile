import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiceMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.78 3H11.22C10.55 3 10 3.55 10 4.22V8H16V14H19.78C20.45 14 21 13.45 21 12.78V4.22C21 3.55 20.45 3 19.78 3ZM12.44 6.67C11.76 6.67 11.21 6.12 11.21 5.44C11.21 4.76 11.76 4.21 12.44 4.21C12.7662 4.21 13.0791 4.33959 13.3097 4.57026C13.5404 4.80093 13.67 5.11378 13.67 5.44C13.67 6.12 13.12 6.67 12.44 6.67ZM18.56 12.78C17.88 12.79 17.33 12.24 17.32 11.56C17.31 10.88 17.86 10.33 18.54 10.32C19.22 10.31 19.77 10.86 19.78 11.56C19.77 12.23 19.23 12.77 18.56 12.78ZM18.56 6.67C17.88 6.68 17.33 6.13 17.32 5.45C17.31 4.77 17.86 4.22 18.54 4.21C19.22 4.2 19.77 4.75 19.78 5.44C19.78 6.12 19.24 6.66 18.56 6.67ZM4.22 10H12.78C13.1036 10 13.4139 10.1285 13.6427 10.3573C13.8715 10.5861 14 10.8964 14 11.22V19.78C14 20.45 13.45 21 12.78 21H4.22C3.55 21 3 20.45 3 19.78V11.22C3 10.55 3.55 10 4.22 10ZM8.5 14.28C7.83 14.28 7.28 14.83 7.28 15.5C7.28 16.17 7.83 16.72 8.5 16.72C9.17 16.72 9.72 16.17 9.72 15.5C9.72 15.1764 9.59146 14.8661 9.36267 14.6373C9.13388 14.4085 8.82356 14.28 8.5 14.28ZM5.44 11.22C4.77 11.22 4.22 11.77 4.22 12.44C4.22 12.6002 4.25156 12.7589 4.31287 12.9069C4.37418 13.0549 4.46404 13.1894 4.57733 13.3027C4.69062 13.416 4.82511 13.5058 4.97313 13.5671C5.12114 13.6284 5.27979 13.66 5.44 13.66C6.11 13.66 6.66 13.11 6.66 12.44C6.66 11.77 6.11 11.22 5.44 11.22ZM11.55 17.33C10.88 17.33 10.33 17.88 10.33 18.55C10.33 19.22 10.88 19.77 11.55 19.77C11.8736 19.77 12.1839 19.6415 12.4127 19.4127C12.6415 19.1839 12.77 18.8736 12.77 18.55C12.77 17.88 12.23 17.34 11.56 17.33H11.55Z" />
    </Svg>
  );
};
