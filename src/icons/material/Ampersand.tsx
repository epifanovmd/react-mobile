import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AmpersandIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.3999 16.5C4.3999 15.6 4.6999 14.7 5.1999 13.9C5.6999 13.1 6.6999 12.2 8.1999 11.2C7.2999 10.1 6.7999 9.3 6.4999 8.7C6.0999 8 5.9999 7.4 5.9999 6.7C5.9999 5.2 6.3999 4.1 7.2999 3.2C8.1999 2.3 9.3999 2 10.8999 2C12.1999 2 13.2999 2.4 14.1999 3.2C15.0999 4 15.4999 5 15.4999 6.1C15.4999 6.9 15.2999 7.6 14.8999 8.3C14.4999 9 13.7999 9.7 12.7999 10.4L11.3999 11.5L15.6999 16.7C16.2999 15.5 16.5999 14.3 16.5999 12.8H18.7999C18.7999 15.1 18.2999 17 17.1999 18.5L19.9999 21.8H16.9999L15.6999 20.3C14.9999 20.9 14.2999 21.3 13.3999 21.6C12.4999 21.9 11.5999 22.1 10.6999 22.1C8.7999 22.1 7.2999 21.6 6.0999 20.6C4.9999 19.5 4.3999 18.2 4.3999 16.5ZM10.6999 20C11.9999 20 13.1999 19.5 14.2999 18.5L9.5999 12.8L9.1999 13.1C7.6999 14.2 6.9999 15.3 6.9999 16.5C6.9999 17.6 7.2999 18.4 7.9999 19C8.6999 19.6 9.4999 20 10.6999 20ZM8.4999 6.7C8.4999 7.6 8.9999 8.6 10.0999 9.9L11.6999 8.8C12.2999 8.4 12.6999 8 12.8999 7.6C13.0999 7.2 13.1999 6.7 13.1999 6.2C13.1999 5.6 12.9999 5.1 12.4999 4.7C12.0999 4.3 11.4999 4.1 10.7999 4.1C10.0999 4.1 9.4999 4.3 9.0999 4.8C8.6999 5.3 8.4999 5.9 8.4999 6.7Z" />
    </Svg>
  );
};
