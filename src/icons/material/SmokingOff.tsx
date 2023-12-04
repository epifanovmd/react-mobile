import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmokingOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 6L9 13H2V16H12L19 23L20.25 21.75L3.25 4.75L2 6ZM20.5 13H22V16H20.5V13ZM18 13H19.5V16H18V13ZM18.85 4.88C19.47 4.27 19.85 3.43 19.85 2.5H18.35C18.35 3.5 17.5 4.35 16.5 4.35V5.85C18.74 5.85 20.5 7.68 20.5 9.92V12H22V9.92C22 7.69 20.72 5.77 18.85 4.88ZM14.5 8.7H16.03C17.08 8.7 18 9.44 18 10.75V12H19.5V10.41C19.5 8.61 17.9 7.25 16.03 7.25H14.5C13.5 7.25 12.65 6.27 12.65 5.25C12.65 4.23 13.5 3.5 14.5 3.5V2C13.6115 2 12.7594 2.35295 12.1312 2.98119C11.5029 3.60944 11.15 4.46152 11.15 5.35C11.15 6.23848 11.5029 7.09056 12.1312 7.71881C12.7594 8.34705 13.6115 8.7 14.5 8.7ZM17 15.93V13H14.07L17 15.93Z" />
    </Svg>
  );
};
