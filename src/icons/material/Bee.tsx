import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BeeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.4 9C17 7.8 16.2 7 15 6.5V5H14V6.4H13.6C12.5 6.4 11.6 6.8 10.8 7.6L10.4 8L9.00005 7.5C8.70005 7.4 8.40005 7.3 8.00005 7.3C7.40005 7.3 6.80005 7.5 6.30005 7.9C5.70005 8.3 5.40005 8.8 5.20005 9.3C5.00005 10 5.00005 10.6 5.20005 11.3C5.50005 12 5.80005 12.5 6.30005 12.8C5.90005 14.3 6.20005 15.6 7.30005 16.7C8.10005 17.5 9.00005 17.9 10.1 17.9C10.6 17.9 10.9 17.9 11.2 17.8C11.8 18.6 12.6 19.1 13.6 19.1C13.9 19.1 14.3 19.1 14.6 19C15.2 18.8 15.6 18.4 16 17.9C16.4 17.3 16.6 16.8 16.6 16.2C16.6 15.8 16.6 15.5 16.5 15.2L16 13.6L16.6 13.2C17.4 12.4 17.8 11.3 17.7 10.1H19V9H17.4ZM7.70005 11.3C7.10005 11 6.90005 10.6 7.10005 10C7.30005 9.4 7.70005 9.2 8.30005 9.4L11.5 10.6C9.90005 11.4 8.70005 11.6 7.70005 11.3ZM14 16.9C13.4 17.1 13 16.9 12.7 16.3C12.4 15.3 12.6 14.1 13.4 12.5L14.6 15.6C14.8 16.3 14.6 16.7 14 16.9ZM15.2 11.6L14.6 10V9.9L14.3 9.6H14.2L12.6 9C13 8.7 13.4 8.5 13.9 8.5C14.4 8.5 14.9 8.7 15.3 9.1C15.7 9.5 15.9 9.9 15.9 10.4C15.7 10.7 15.5 11.2 15.2 11.6Z" />
    </Svg>
  );
};
