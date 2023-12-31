import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountTieHatOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 4.5C6 3.1 8.7 2 12 2C15.3 2 18 3.1 18 4.5C18 4.9 17.8 5.2 17.5 5.5C16.6 4.6 14.5 4 12 4C9.5 4 7.4 4.6 6.5 5.5C6.2 5.2 6 4.9 6 4.5ZM12 5C9.8 5 8.1 5.5 7.4 6.1C8.5 6.6 10.1 7 12 7C13.9 7 15.5 6.6 16.6 6.1C15.9 5.5 14.2 5 12 5ZM14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8V7.9C9.3 7.8 8.6 7.7 8 7.5V8C8 10.2 9.8 12 12 12C14.2 12 16 10.2 16 8C16 7.8 16 7.6 15.9 7.4C15.3 7.6 14.6 7.7 13.9 7.8C14 7.9 14 7.9 14 8ZM16.4 13.8L15.7 15L15.5 15.5C17 16 18.1 16.6 18.1 17V20.1H13.9L13 15L13.9 13.1C13.3 13.1 12.7 13 12 13C11.3 13 10.7 13 10.1 13.1L11 15L10.1 20.1H5.9V17C5.9 16.6 7 16 8.5 15.5L8.3 15L7.7 13.8C5.7 14.4 4 15.5 4 17V22H20V17C20 15.5 18.3 14.4 16.4 13.8Z" />
    </Svg>
  );
};
