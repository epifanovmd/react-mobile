import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarSeatHeaterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 18C5 18 2 10 2 6C2 2 4 2 4 2H5C5 2 6 2 6 3C6 4 5 4 5 6C5 8 8 10 8 13C8 16 5 18 5 18ZM15 17C16.1 17 17 17.9 17 19V20C17 21.1 16.1 22 15 22H9C7 22 6 20.2 6 20.2C5.8 20 5.7 19.6 6 19.4C6 19.4 9 16.9 10 16.9H15V17ZM13.7 3.4L12.3 6.8L13.7 10.2L11.7 15L10 13.6L11.4 10.2L10 6.8L12 2L13.7 3.4ZM17.9 3.4L16.5 6.8L17.9 10.2L15.9 15L14.2 13.6L15.6 10.2L14.2 6.8L16.2 2L17.9 3.4ZM22 3.4L20.6 6.8L22 10.2L20 15L18.3 13.6L19.7 10.2L18.3 6.8L20.3 2L22 3.4Z" />
    </Svg>
  );
};
