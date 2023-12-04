import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneDialOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9H16.1C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM5 5H6.5C6.6 5.9 6.8 6.8 7 7.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5ZM19 19C17.7 18.9 16.4 18.6 15.2 18.2L16.4 17C17.2 17.2 18.1 17.4 19 17.4V19ZM15 4C15 4.6 14.6 5 14 5C13.4 5 13 4.6 13 4C13 3.4 13.4 3 14 3C14.6 3 15 3.4 15 4ZM18 4C18 4.6 17.6 5 17 5C16.4 5 16 4.6 16 4C16 3.4 16.4 3 17 3C17.6 3 18 3.4 18 4ZM21 4C21 4.6 20.6 5 20 5C19.4 5 19 4.6 19 4C19 3.4 19.4 3 20 3C20.6 3 21 3.4 21 4ZM15 7C15 7.6 14.6 8 14 8C13.4 8 13 7.6 13 7C13 6.4 13.4 6 14 6C14.6 6 15 6.4 15 7ZM18 7C18 7.6 17.6 8 17 8C16.4 8 16 7.6 16 7C16 6.4 16.4 6 17 6C17.6 6 18 6.4 18 7ZM21 7C21 7.6 20.6 8 20 8C19.4 8 19 7.6 19 7C19 6.4 19.4 6 20 6C20.6 6 21 6.4 21 7ZM15 10C15 10.6 14.6 11 14 11C13.4 11 13 10.6 13 10C13 9.4 13.4 9 14 9C14.6 9 15 9.4 15 10ZM18 10C18 10.6 17.6 11 17 11C16.4 11 16 10.6 16 10C16 9.4 16.4 9 17 9C17.6 9 18 9.4 18 10ZM21 10C21 10.6 20.6 11 20 11C19.4 11 19 10.6 19 10C19 9.4 19.4 9 20 9C20.6 9 21 9.4 21 10Z" />
    </Svg>
  );
};
