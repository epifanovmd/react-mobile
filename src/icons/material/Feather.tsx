import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FeatherIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 1.99958C22 1.99958 14.36 1.62958 8.34 9.87958C3.72 16.2096 2 21.9996 2 21.9996L3.94 20.9996C5.38 18.4996 6.13 17.4696 7.54 15.9996C10.07 16.7396 12.71 16.6496 15 13.9996C13 13.4396 11.4 13.5696 9.04 13.8096C11.69 11.9996 13.5 11.5996 16 11.9996L17 9.99958C15.2 9.65958 14 9.62958 12.22 10.0396C14.19 8.64958 15.56 7.86958 18 7.99958L19.21 6.06958C17.65 5.95958 16.71 6.12958 14.92 6.56958C16.53 5.10958 18 4.44958 20.14 4.31958C20.14 4.31958 21.19 2.42958 22 1.99958Z" />
    </Svg>
  );
};
