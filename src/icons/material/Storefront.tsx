import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StorefrontIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.05997 3C4.62997 3 4.21997 3.14 3.83997 3.42C3.45997 3.7 3.23997 4.06 3.13997 4.5L2.10997 8.91C1.85997 10 2.05997 10.92 2.68997 11.73C2.80997 11.85 2.92997 11.97 3.03997 12.07C3.62997 12.64 4.27997 13 5.21997 13C6.15997 13 6.90997 12.59 7.46997 12.05C8.09997 12.67 8.85997 13 9.79997 13C10.64 13 11.44 12.63 12 12.07C12.68 12.7 13.45 13 14.3 13C15.17 13 15.91 12.67 16.54 12.05C17.11 12.62 17.86 13 18.81 13C19.76 13 20.43 12.65 21 12.06C21.09 11.97 21.18 11.87 21.28 11.77C21.94 10.95 22.14 10 21.89 8.91L20.86 4.5C20.73 4.06 20.5 3.7 20.13 3.42C19.77 3.14 19.38 3 18.94 3H5.05997ZM18.89 4.97L19.97 9.38C20.06 9.81 19.97 10.2 19.69 10.55C19.44 10.86 19.13 11 18.75 11C18.44 11 18.17 10.9 17.95 10.66C17.73 10.43 17.61 10.16 17.58 9.84L16.97 5L18.89 4.97ZM5.05997 5H7.02997L6.41997 9.84C6.29997 10.63 5.90997 11 5.24997 11C4.83997 11 4.52997 10.86 4.30997 10.55C4.02997 10.2 3.93997 9.81 4.02997 9.38L5.05997 5ZM9.04997 5H11V9.7C11 10.05 10.89 10.35 10.64 10.62C10.39 10.88 10.08 11 9.69997 11C9.35997 11 9.06997 10.88 8.83997 10.59C8.60997 10.3 8.49997 10 8.49997 9.66V9.5L9.04997 5ZM13 5H14.95L15.5 9.5C15.58 9.92 15.5 10.27 15.21 10.57C14.95 10.87 14.61 11 14.2 11C13.89 11 13.61 10.88 13.36 10.62C13.11 10.35 13 10.05 13 9.7V5ZM2.99997 14.03V19C2.99997 20.11 3.88997 21 4.99997 21C9.66997 21 14.33 21 19 21C20.1 21 21 20.11 21 19V14.05C20.45 14.63 19.75 14.96 19 15C18 15.03 17.25 14.74 16.54 14.05C15.94 14.65 15.14 15 14.3 15C13.4 15 12.6 14.64 12 14.07C11.43 14.64 10.65 15 9.77997 15C8.86997 15 8.06997 14.65 7.46997 14.05C6.88997 14.64 6.09997 15 5.22997 15C4.32997 15 3.65997 14.65 2.99997 14.03Z" />
    </Svg>
  );
};
