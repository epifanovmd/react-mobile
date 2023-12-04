import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailSealOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.5 13.3C12.3 12.8 12.3 12.4 12.4 12H3V4.5L9 8.5L15 4.5V6.2C15.6 5.9 16.1 5.9 16.4 5.9C16.5 5.8 16.7 5.7 16.9 5.6V2.6C17 1.7 16.3 1 15.4 1H2.6C1.7 1 1 1.7 1 2.6V12.4C1 13.3 1.7 14 2.6 14H12.9C12.7 13.8 12.6 13.6 12.5 13.3ZM15 3L9 7L3 3H15ZM22.6 9.9C22.4 9.3 21.9 9.2 21.6 8.9C21.4 8.6 21.4 8 20.9 7.7C20.4 7.3 19.9 7.5 19.5 7.4C19.1 7.3 18.8 6.8 18.2 6.8C17.6 6.8 17.3 7.2 16.9 7.4C16.5 7.5 16 7.3 15.5 7.7C15 8 15.1 8.5 14.8 8.9C14.5 9.2 14 9.4 13.8 9.9C13.6 10.5 14 10.9 14 11.3C14 11.7 13.6 12.1 13.8 12.7C14 13.3 14.5 13.4 14.8 13.7C15 14 15 14.6 15.5 14.9C16 15.3 16.5 15.1 16.9 15.2C17.3 15.3 17.6 15.8 18.2 15.8C18.8 15.8 19.1 15.4 19.5 15.2C19.9 15.1 20.4 15.3 20.9 14.9C21.4 14.5 21.4 14 21.6 13.7C21.9 13.4 22.4 13.2 22.6 12.7C22.8 12.1 22.4 11.7 22.4 11.3C22.4 10.9 22.8 10.5 22.6 9.9ZM18.2 14.4C16.5 14.4 15.2 13 15.2 11.4C15.2 9.8 16.6 8.4 18.2 8.4C19.8 8.4 21.2 9.8 21.2 11.4C21.2 13 19.9 14.4 18.2 14.4ZM19.7 11.3C19.7 12.1 19 12.8 18.2 12.8C17.4 12.8 16.7 12.1 16.7 11.3C16.7 10.5 17.4 9.8 18.2 9.8C19 9.8 19.7 10.5 19.7 11.3ZM19.5 17.1L19 19.8L18.4 22.9L16.4 21L14 22.1L15 16.4C15.4 16.6 15.9 16.7 16.4 16.7C16.7 16.9 17.1 17.1 17.4 17.2C17.6 17.3 17.9 17.3 18.2 17.3C18.7 17.4 19.1 17.3 19.5 17.1ZM22.7 19.5L20.7 18.8L21.1 16.6L21.7 16.3L21.8 16.2L22.7 19.5Z" />
    </Svg>
  );
};
