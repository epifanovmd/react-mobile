import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShakerOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.88 4L19.03 6.1L13.5 10.5L12.5 9.5L16.87 4H16.88ZM16.88 2C16.3 2 15.73 2.24 15.33 2.72L9.8 9.65L13.34 13.19L20.28 7.67C21.18 6.91 21.25 5.54 20.41 4.7L18.3 2.59C17.9 2.19 17.39 2 16.88 2ZM9.1 10.36L8.39 11.07C8 11.46 8 12.09 8.39 12.5L10.5 14.6C10.71 14.8 10.96 14.89 11.22 14.89C11.48 14.89 11.73 14.8 11.93 14.6L12.63 13.9L9.1 10.36ZM6 15C5.45 15 5 15.45 5 16C5 16.55 5.45 17 6 17C6.55 17 7 16.55 7 16C7 15.45 6.55 15 6 15ZM9 16C8.45 16 8 16.45 8 17C8 17.55 8.45 18 9 18C9.55 18 10 17.55 10 17C10 16.45 9.55 16 9 16ZM4 18C3.45 18 3 18.45 3 19C3 19.55 3.45 20 4 20C4.55 20 5 19.55 5 19C5 18.45 4.55 18 4 18ZM7 19C6.45 19 6 19.45 6 20C6 20.55 6.45 21 7 21C7.55 21 8 20.55 8 20C8 19.45 7.55 19 7 19Z" />
    </Svg>
  );
};
