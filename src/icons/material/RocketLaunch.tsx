import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RocketLaunchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.1301 22.1892L11.5001 18.3592C13.0701 17.7792 14.5401 16.9992 15.9001 16.0892L13.1301 22.1892ZM5.64006 12.4992L1.81006 10.8692L7.91006 8.09918C7.00006 9.45918 6.22006 10.9292 5.64006 12.4992ZM21.6101 2.38918C21.6101 2.38918 16.6601 0.268178 11.0001 5.92918C8.81006 8.11918 7.50006 10.5292 6.65006 12.6392C6.37006 13.3892 6.56006 14.2092 7.11006 14.7692L9.24006 16.8892C9.79006 17.4492 10.6101 17.6292 11.3601 17.3492C13.5001 16.5292 15.8801 15.1892 18.0701 12.9992C23.7301 7.33918 21.6101 2.38918 21.6101 2.38918ZM14.5401 9.45918C13.7601 8.67918 13.7601 7.40918 14.5401 6.62918C15.3201 5.84918 16.5901 5.84918 17.3701 6.62918C18.1401 7.40918 18.1501 8.67918 17.3701 9.45918C16.5901 10.2392 15.3201 10.2392 14.5401 9.45918ZM8.88006 16.5292L7.47006 15.1192L8.88006 16.5292ZM6.24006 21.9992L9.88006 18.3592C9.54006 18.2692 9.21006 18.1192 8.91006 17.9092L4.83006 21.9992H6.24006ZM2.00006 21.9992H3.41006L8.18006 17.2392L6.76006 15.8292L2.00006 20.5892V21.9992ZM2.00006 19.1692L6.09006 15.0892C5.88006 14.7892 5.73006 14.4692 5.64006 14.1192L2.00006 17.7592V19.1692Z" />
    </Svg>
  );
};
