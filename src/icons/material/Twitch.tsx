import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TwitchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.6401 5.93H13.0701V10.21H11.6401V5.93ZM15.5701 5.93H17.0001V10.21H15.5701V5.93ZM7.00005 2L3.43005 5.57V18.43H7.71005V22L11.2901 18.43H14.1401L20.5701 12V2H7.00005ZM19.1401 11.29L16.2901 14.14H13.4301L10.9301 16.64V14.14H7.71005V3.43H19.1401V11.29Z" />
    </Svg>
  );
};
