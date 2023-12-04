import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SproutOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.9999 4.1V2.3L21.1999 2.1C21.0999 2.1 20.4999 2 19.4999 2C15.3999 2 12.3999 3.2 10.6999 5.3C9.3999 4.5 7.5999 4 5.4999 4C4.4999 4 3.7999 4.1 3.7999 4.1L1.8999 4.4L1.9999 6.1C2.0999 9.1 3.5999 14.8 8.7999 14.8C8.8999 14.8 8.8999 14.8 8.9999 14.8V18.2C5.1999 18.7 1.9999 20 1.9999 20V22H21.9999V20C21.9999 20 18.7999 18.7 14.9999 18.2V15C21.2999 14.9 22.9999 7.8 22.9999 4.1ZM11.9999 18C11.6999 18 11.2999 18 10.9999 18V12.4C10.9999 12.4 10.7999 9 7.9999 9C7.9999 9 9.4999 9.8 9.8999 12.7C9.4999 12.8 9.0999 12.8 8.7999 12.8C4.1999 12.8 3.9999 6.1 3.9999 6.1C3.9999 6.1 4.5999 6 5.4999 6C7.3999 6 10.4999 6.4 11.3999 9.1C11.8999 4.6 16.9999 4 19.4999 4C20.3999 4 20.9999 4.1 20.9999 4.1C20.9999 4.1 20.9999 13.1 14.6999 13.1C14.4999 13.1 14.1999 13.1 13.9999 13.1C13.9999 11.1 15.9999 8.1 15.9999 8.1C12.9999 9.1 12.9999 13 12.9999 13V18C12.6999 18 12.2999 18 11.9999 18Z" />
    </Svg>
  );
};
