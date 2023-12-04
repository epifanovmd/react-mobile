import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WiperWashAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 6C11 5.7 11.1 4.6 11.8 3.8L10 2.4L8.2 3.9C8.9 4.6 9 5.7 9 6C2.7 6.4 0 11 0 11L7 18C7 18 7.7 16.7 9 16.2V18.3C8.4 18.6 8 19.3 8 20C8 21.11 8.9 22 10 22C11.1 22 12 21.11 12 20C12 19.3 11.6 18.6 11 18.3V16.2C12.3 16.7 13 18 13 18L20 11C20 11 17.3 6.5 11 6ZM9 14.1C8.2 14.3 7.5 14.6 6.9 15.1L2.7 10.9C3.8 9.8 5.8 8.3 9 8.1V14.1ZM13.1 15.1C12.5 14.7 11.8 14.3 11 14.1V8.1C14.2 8.4 16.2 9.8 17.3 10.9L13.1 15.1ZM16 1.3L15.3 3.2C14.6 2.9 13.5 2.9 12.7 3.2L12 1.3C13.2 0.9 14.8 0.9 16 1.3ZM19 6H17C17 6 17 4.7 16.2 3.9L17.7 2.6C19 4 19 5.9 19 6ZM2.2 2.6L3.7 3.9C3 4.7 3 6 3 6H1C1 5.9 1 4 2.2 2.6ZM8 1.3L7.3 3.2C6.6 2.9 5.5 2.9 4.7 3.2L4 1.3C5.2 0.9 6.8 0.9 8 1.3ZM22 12V7H24V13H22V12ZM22 17H24V15H22" />
    </Svg>
  );
};
