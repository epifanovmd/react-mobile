import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldLockOpenOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 11C21 16.5 17.2 21.7 12 23C6.8 21.7 3 16.5 3 11V5L12 1L21 5V11ZM12 21C15.8 20 19 15.5 19 11.2V6.3L12 3.2L5 6.3V11.2C5 15.5 8.2 20 12 21ZM14.8 11H10.5V8.5C10.5 7.7 11.2 7.2 12 7.2C12.8 7.2 13.5 7.7 13.5 8.5V9H14.8V8.5C14.8 7.1 13.4 6 12 6C10.6 6 9.2 7.1 9.2 8.5V11C8.6 11 8 11.6 8 12.2V15.7C8 16.4 8.6 17 9.2 17H14.7C15.4 17 16 16.4 16 15.8V12.3C16 11.6 15.4 11 14.8 11Z" />
    </Svg>
  );
};
