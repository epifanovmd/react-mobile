import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SlideIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.83 15.45C14.47 14.9 14.18 14.39 13.91 13.92C12.74 11.91 11.79 10.55 9 10.13V5.5C9 3.57 7.43 2 5.5 2C3.57 2 2 3.57 2 5.5V22H4V20H7V22H9V12.16C10.76 12.5 11.29 13.39 12.17 14.92C12.46 15.43 12.78 15.97 13.17 16.56C15.41 19.92 17.67 22 22 22V20C18.53 20 16.8 18.4 14.83 15.45ZM5.5 4C6.33 4 7 4.67 7 5.5V10H4V5.5C4 4.67 4.67 4 5.5 4ZM4 18V16H7V18H4ZM7 14H4V12H7V14Z" />
    </Svg>
  );
};
