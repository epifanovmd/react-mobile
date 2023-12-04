import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CrowdIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.68997 9.12C3.49997 8.93 3.28997 8.84 3.03997 8.84C2.62997 8.84 2.31997 9.03 2.11997 9.42C1.91997 9.81 1.96997 10.18 2.28997 10.53C3.46997 11.59 4.21997 12.34 4.53997 12.78C4.94997 13.34 5.14997 14.16 5.14997 15.22C5.14997 16.53 5.64997 17.5 6.64997 18.17C7.20997 18.61 7.81997 18.94 8.49997 19.16V15.27C8.49997 14.33 8.16997 13.55 7.53997 12.92L3.68997 9.12ZM16.46 12.97C15.84 13.59 15.5 14.36 15.5 15.27V19.2C16.46 18.86 17.26 18.33 17.92 17.63C18.57 16.93 18.9 16.16 18.9 15.22C18.9 14.09 19.09 13.28 19.47 12.78C19.56 12.62 19.73 12.42 20 12.17C20.23 11.92 20.47 11.68 20.71 11.46C20.94 11.25 21.17 11.03 21.39 10.81L21.72 10.53C21.91 10.34 22 10.12 22 9.87C22 9.59 21.91 9.34 21.72 9.14C21.53 8.94 21.3 8.84 21 8.84C20.7 8.84 20.5 8.93 20.31 9.12L16.46 12.97ZM12 20C12.69 20 13.36 19.91 14 19.72V16.15C14 15.56 13.82 15.1 13.41 14.66C13 14.22 12.53 14 12 14C11.47 14 11 14.2 10.62 14.61C10.22 15 9.99997 15.46 9.99997 16.06V19.72C10.64 19.91 11.31 20 12 20ZM8.99997 8.5C8.99997 9.33 8.32997 10 7.49997 10C6.66997 10 5.99997 9.33 5.99997 8.5C5.99997 7.67 6.66997 7 7.49997 7C8.32997 7 8.99997 7.67 8.99997 8.5ZM18 8.5C18 9.33 17.33 10 16.5 10C15.67 10 15 9.33 15 8.5C15 7.67 15.67 7 16.5 7C17.33 7 18 7.67 18 8.5ZM13.5 5.5C13.5 6.33 12.83 7 12 7C11.17 7 10.5 6.33 10.5 5.5C10.5 4.67 11.17 4 12 4C12.83 4 13.5 4.67 13.5 5.5ZM13.5 11C13.5 11.83 12.83 12.5 12 12.5C11.17 12.5 10.5 11.83 10.5 11C10.5 10.17 11.17 9.5 12 9.5C12.83 9.5 13.5 10.17 13.5 11Z" />
    </Svg>
  );
};
