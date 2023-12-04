import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MedalIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 2H4V4L9.81 8.36C6.14 9.57 4.14 13.53 5.35 17.2C6.56 20.87 10.5 22.87 14.19 21.66C17.86 20.45 19.86 16.5 18.65 12.82C17.95 10.71 16.3 9.05 14.19 8.36L20 4V2ZM14.94 19.5L12 17.78L9.06 19.5L9.84 16.17L7.25 13.93L10.66 13.64L12 10.5L13.34 13.64L16.75 13.93L14.16 16.17L14.94 19.5Z" />
    </Svg>
  );
};
