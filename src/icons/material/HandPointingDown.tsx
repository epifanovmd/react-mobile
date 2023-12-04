import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandPointingDownIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.9 21V11L6.7 12.69L6.5 12.72C6.19 12.72 5.93 12.6 5.74 12.4L5 11.63L9.9 7.43C10.16 7.16 10.5 7 10.9 7H17.4C18.17 7 18.9 7.7 18.9 8.5V12.86C18.9 13.47 18.55 14 18.05 14.2L13.11 16.4L11.9 16.53V21C11.9 21.2652 11.7946 21.5196 11.6071 21.7071C11.4196 21.8946 11.1652 22 10.9 22C10.6348 22 10.3804 21.8946 10.1929 21.7071C10.0054 21.5196 9.9 21.2652 9.9 21ZM18.9 5H10.9V2H18.9V5Z" />
    </Svg>
  );
};
