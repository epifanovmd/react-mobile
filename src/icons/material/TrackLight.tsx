import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrackLightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.99993 1V3H8.99993V6.4L4.10993 4.38L1.42993 10.84L6.96993 13.14L11.9399 16.82L13.7899 17.59L17.6199 8.35L15.7699 7.58L10.9999 6.87V3H13.9999V1H5.99993ZM21.8099 6.29L19.4999 7.25L20.2599 9.1L22.5699 8.14L21.8099 6.29ZM19.7799 13.57L18.9999 15.42L21.7899 16.57L22.5499 14.72L19.7799 13.57ZM16.1899 18.93L14.3399 19.69L15.2999 22L17.1499 21.23L16.1899 18.93Z" />
    </Svg>
  );
};
