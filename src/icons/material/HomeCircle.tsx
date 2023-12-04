import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeCircleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.07 4.92916C17.22 2.99916 14.66 1.95916 12 1.99916C9.34001 1.95916 6.79001 2.99916 4.94001 4.92916C3.00001 6.77916 1.96001 9.33916 2.00001 11.9992C1.96001 14.6592 3.00001 17.2092 4.93001 19.0592C6.78001 20.9992 9.34001 22.0392 12 21.9992C14.66 22.0392 17.21 20.9992 19.06 19.0692C21 17.2192 22.04 14.6592 22 11.9992C22.04 9.33916 21 6.77916 19.07 4.92916ZM17 11.9992V17.9992H13.5V12.9992H10.5V17.9992H7.00001V11.9992H5.00001L12 4.99916L19.5 11.9992H17Z" />
    </Svg>
  );
};
