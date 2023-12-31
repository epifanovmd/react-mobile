import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodForkDrinkIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 3.00008C2.73478 3.00008 2.48043 3.10544 2.29289 3.29297C2.10536 3.48051 2 3.73486 2 4.00008V8.00008V9.50008C2 11.1901 3.03 12.6301 4.5 13.2201V19.5001C4.5 19.8979 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21.0001 6 21.0001C6.39782 21.0001 6.77936 20.842 7.06066 20.5607C7.34196 20.2794 7.5 19.8979 7.5 19.5001V13.2201C8.97 12.6301 10 11.1901 10 9.50008V8.00008V4.00008C10 3.73486 9.89464 3.48051 9.70711 3.29297C9.51957 3.10544 9.26522 3.00008 9 3.00008C8.73478 3.00008 8.48043 3.10544 8.29289 3.29297C8.10536 3.48051 8 3.73486 8 4.00008V8.00008C8 8.13269 7.94732 8.25987 7.85355 8.35363C7.75979 8.4474 7.63261 8.50008 7.5 8.50008C7.36739 8.50008 7.24021 8.4474 7.14645 8.35363C7.05268 8.25987 7 8.13269 7 8.00008V4.00008C7 3.73486 6.89464 3.48051 6.70711 3.29297C6.51957 3.10544 6.26522 3.00008 6 3.00008C5.73478 3.00008 5.48043 3.10544 5.29289 3.29297C5.10536 3.48051 5 3.73486 5 4.00008V8.00008C5 8.13269 4.94732 8.25987 4.85355 8.35363C4.75979 8.4474 4.63261 8.50008 4.5 8.50008C4.36739 8.50008 4.24021 8.4474 4.14645 8.35363C4.05268 8.25987 4 8.13269 4 8.00008V4.00008C4 3.73486 3.89464 3.48051 3.70711 3.29297C3.51957 3.10544 3.26522 3.00008 3 3.00008ZM19.88 3.00008C19.75 3.00008 19.62 3.09008 19.5 3.16008L16 5.25008V9.00008H12V11.0001H13L14 21.0001H20L21 11.0001H22V9.00008H18V6.34008L20.5 4.84008C21 4.56008 21.13 4.00008 20.84 3.50008C20.63 3.14008 20.26 2.95008 19.88 3.00008Z" />
    </Svg>
  );
};
