import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SunThermometerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 7C7.20005 7 5.00005 9.2 5.00005 12C5.00005 14.8 7.20005 17 10 17C12.8 17 15 14.8 15 12C15 9.2 12.8 7 10 7ZM10 2L12.4 5.4C11.6 5.2 10.8 5 10 5C9.20005 5 8.40005 5.2 7.60005 5.4L10 2ZM1.30005 7L5.50005 6.7C4.90005 7.2 4.40005 7.8 3.90005 8.5C3.50005 9.2 3.20005 10 3.10005 10.8L1.30005 7ZM1.40005 17L3.20005 13.2C3.30005 14 3.50005 14.8 4.00005 15.5C4.40005 16.2 5.00005 16.9 5.50005 17.4L1.40005 17ZM10 22L7.60005 18.6C8.30005 18.8 9.10005 19 10 19C10.8 19 11.6 18.8 12.4 18.6L10 22ZM20.8 13.6V6.8C20.8 5.8 20 5 19 5C18 5 17.2 5.8 17.2 6.8V13.6C16.5 14.1 16 15 16 16C16 17.7 17.3 19 19 19C20.7001 19 22 17.7 22 16C22 15 21.5 14.1 20.8 13.6ZM18.2001 6.8C18.2001 6.3 18.6 6 19 6C19.4 6 19.8 6.3 19.8 6.8V8H18.3V6.8H18.2001Z" />
    </Svg>
  );
};
