import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherSunsetIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 12H7C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12H21C21.2652 12 21.5196 12.1054 21.7071 12.2929C21.8946 12.4804 22 12.7348 22 13C22 13.2652 21.8946 13.5196 21.7071 13.7071C21.5196 13.8946 21.2652 14 21 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13C2 12.7348 2.10536 12.4804 2.29289 12.2929C2.48043 12.1054 2.73478 12 3 12ZM5 16H19C19.2652 16 19.5196 16.1054 19.7071 16.2929C19.8946 16.4804 20 16.7348 20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929C4.48043 16.1054 4.73478 16 5 16ZM17 20C17.2652 20 17.5196 20.1054 17.7071 20.2929C17.8946 20.4804 18 20.7348 18 21C18 21.2652 17.8946 21.5196 17.7071 21.7071C17.5196 21.8946 17.2652 22 17 22H7C6.73478 22 6.48043 21.8946 6.29289 21.7071C6.10536 21.5196 6 21.2652 6 21C6 20.7348 6.10536 20.4804 6.29289 20.2929C6.48043 20.1054 6.73478 20 7 20H17ZM15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12H15ZM12 2L14.39 5.42C13.65 5.15 12.84 5 12 5C11.16 5 10.35 5.15 9.61 5.42L12 2ZM3.34 7L7.5 6.65C6.9 7.16 6.36 7.78 5.94 8.5C5.5 9.24 5.25 10 5.11 10.79L3.34 7ZM20.65 7L18.88 10.79C18.74 10 18.47 9.23 18.05 8.5C17.63 7.78 17.1 7.15 16.5 6.64L20.65 7Z" />
    </Svg>
  );
};
