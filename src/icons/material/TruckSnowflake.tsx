import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TruckSnowflakeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 4H3C1.9 4 1 4.9 1 6V17H3C3 18.7 4.3 20 6 20C7.7 20 9 18.7 9 17H15C15 18.7 16.3 20 18 20C19.7 20 21 18.7 21 17H23V12L20 8H17V4ZM10.2 5.3H10.5C11 5.4 11.3 5.9 11.2 6.4L10.7 8.4L12.7 7.9C13.2 7.8 13.7 8.1 13.8 8.6C13.9 9.1 13.6 9.6 13.2 9.7L11.2 10.2L12.6 11.6C13 11.9 13 12.5 12.6 12.9C12.3 13.3 11.7 13.3 11.3 12.9L9.8 11.5L9.3 13.5C9.2 14 8.7 14.3 8.2 14.1C7.7 14 7.4 13.5 7.6 13L8.1 11L6.1 11.5C5.6 11.6 5.1 11.3 5 10.9C4.9 10.4 5.2 9.9 5.6 9.8L7.6 9.3L6.2 7.7C5.9 7.4 5.9 6.8 6.2 6.4C6.5 6.1 7.1 6.1 7.5 6.4L8.9 7.8L9.4 5.8C9.5 5.6 9.8 5.3 10.2 5.3ZM17 9.5H19.5L21.5 12H17V9.5ZM6 15.5C6.8 15.5 7.5 16.2 7.5 17C7.5 17.8 6.8 18.5 6 18.5C5.2 18.5 4.5 17.8 4.5 17C4.5 16.2 5.2 15.5 6 15.5ZM18 15.5C18.8 15.5 19.5 16.2 19.5 17C19.5 17.8 18.8 18.5 18 18.5C17.2 18.5 16.5 17.8 16.5 17C16.5 16.2 17.2 15.5 18 15.5Z" />
    </Svg>
  );
};
