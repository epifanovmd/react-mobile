import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TeaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 19H20V21H4V19ZM20 8V5H18V8H20ZM20 3C20.6 3 21 3.2 21.4 3.6C21.8 4 22 4.5 22 5V8C22 8.6 21.8 9 21.4 9.4C21 9.8 20.6 10 20 10H18V13C18 14.1 17.6 15 16.8 15.8C16 16.6 15.1 17 14 17H8C6.9 17 6 16.6 5.2 15.8C4.4 15 4 14.1 4 13V3H9V5.4L7.2 6.8C7.1 6.9 7 7.1 7 7.2V11.5C7 11.8 7.2 12 7.5 12H11.5C11.8 12 12 11.8 12 11.5V7.2C12 7 11.9 6.9 11.8 6.8L10 5.4V3H20Z" />
    </Svg>
  );
};
