import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarLightHighIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 4.7998C9 4.7998 9 19.1998 13 19.1998C17 19.1998 22 16.4998 22 11.9998C22 7.4998 17 4.7998 13 4.7998ZM13.1 17.1998C12.7 16.7998 12 14.9998 12 11.9998C12 8.9998 12.7 7.1998 13.1 6.7998C16 6.8998 20 8.6998 20 11.9998C20 15.2998 16 17.0998 13.1 17.1998ZM2 4.9998H9.5C9.3 5.3998 9 5.7998 8.9 6.3998C8.8 6.5998 8.8 6.7998 8.7 6.9998H2V4.9998ZM8 10.9998H2V8.9998H8.2C8.1 9.5998 8.1 10.2998 8 10.9998ZM8.7 16.9998C8.9 17.7998 9.2 18.3998 9.6 18.9998H2.1V16.9998H8.7ZM8.2 14.9998H2V12.9998H8C8.1 13.6998 8.1 14.3998 8.2 14.9998Z" />
    </Svg>
  );
};
