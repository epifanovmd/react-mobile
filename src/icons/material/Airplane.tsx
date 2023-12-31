import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirplaneIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.5599 3.90998C21.1499 4.49998 21.1499 5.44998 20.5599 6.02998L16.6699 9.91998L18.7899 19.11L17.3799 20.53L13.4999 13.1L9.59994 17L9.95994 19.47L8.88994 20.53L7.12994 17.35L3.93994 15.58L4.99994 14.5L7.49994 14.87L11.3699 11L3.93994 7.08998L5.35994 5.67998L14.5499 7.79998L18.4399 3.90998C18.9999 3.32998 19.9999 3.32998 20.5599 3.90998Z" />
    </Svg>
  );
};
