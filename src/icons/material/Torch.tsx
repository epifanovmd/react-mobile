import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TorchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.59992 9.6C8.99992 10.2 9.49992 10.7 10.1999 11H14.1999C14.4999 10.9 14.6999 10.7 14.8999 10.5C15.8999 9.5 16.2999 8 15.7999 6.7L15.6999 6.5C15.5999 6.2 15.3999 6 15.1999 5.8C15.0999 5.6 14.8999 5.5 14.7999 5.3C14.3999 5 13.9999 4.7 13.5999 4.3C12.6999 3.4 12.5999 2 13.0999 1C12.5999 1.1 12.0999 1.4 11.6999 1.8C10.1999 3 9.59992 5.1 10.2999 7V7.2C10.2999 7.3 10.1999 7.4 10.0999 7.5C9.99992 7.6 9.79992 7.5 9.69992 7.4L9.59992 7.3C8.99992 6.5 8.89992 5.3 9.29992 4.3C8.39992 5.1 7.89992 6.4 7.99992 7.7C7.99992 8 8.09992 8.3 8.19992 8.6C8.19992 8.9 8.39992 9.3 8.59992 9.6ZM12.2999 8.1C12.3999 7.6 12.1999 7.2 12.0999 6.8C11.9999 6.4 11.9999 6 12.1999 5.6L12.4999 6.2C12.8999 6.8 13.5999 7 13.7999 7.8V8.1C13.7999 8.6 13.5999 9.1 13.2999 9.4C13.0999 9.5 12.8999 9.7 12.6999 9.7C12.0999 9.9 11.3999 9.6 10.9999 9.2C11.7999 9.2 12.1999 8.6 12.2999 8.1ZM14.9999 12V14H13.9999L12.9999 22H10.9999L9.99992 14H8.99992V12H14.9999Z" />
    </Svg>
  );
};
