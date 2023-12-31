import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.4 17C17.2 17.2 18.1 17.4 19 17.5V19C17.7 18.9 16.4 18.7 15.2 18.2L16.4 17ZM20.2 2.5L2.5 20.2L3.8 21.5L8.7 16.6C11.8 19.4 15.8 21 20 21C20.6 21 21 20.6 21 20V16.5C21 15.9 20.6 15.5 20 15.5C18.8 15.5 17.5 15.3 16.4 14.9H16.1C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C12.1 16.8 11 16.1 10.1 15.2L21.5 3.8L20.2 2.5ZM6.5 5C6.6 5.9 6.8 6.8 7 7.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5H6.5ZM7.5 3H4C3.4 3 3 3.4 3 4C3 7.6 4.1 11 6.2 13.9L7.6 12.5C7.2 12 6.9 11.4 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.4 8.5 5.2 8.5 4C8.5 3.4 8.1 3 7.5 3Z" />
    </Svg>
  );
};
