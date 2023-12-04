import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WiperWashIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 6C13 5.7 13.1 4.6 13.8 3.8L12 2.4L10.2 3.9C10.9 4.6 11 5.7 11 6C4.7 6.4 2 11 2 11L9 18C9 18 9.7 16.7 11 16.2V18.3C10.4 18.6 10 19.3 10 20C10 20.5304 10.2107 21.0391 10.5858 21.4142C10.9609 21.7893 11.4696 22 12 22C12.5304 22 13.0391 21.7893 13.4142 21.4142C13.7893 21.0391 14 20.5304 14 20C14 19.3 13.6 18.6 13 18.3V16.2C14.3 16.7 15 18 15 18L22 11C22 11 19.3 6.5 13 6ZM11 14.1C10.2 14.3 9.5 14.6 8.9 15.1L4.7 10.9C5.8 9.8 7.8 8.3 11 8.1V14.1ZM15.1 15.1C14.5 14.7 13.8 14.3 13 14.1V8.1C16.2 8.4 18.2 9.8 19.3 10.9L15.1 15.1ZM18 1.3L17.3 3.2C16.6 2.9 15.5 2.9 14.7 3.2L14 1.3C15.2 0.9 16.8 0.9 18 1.3ZM21 6H19C19 6 19 4.7 18.2 3.9L19.7 2.6C21 4 21 5.9 21 6ZM4.2 2.6L5.7 3.9C5 4.7 5 6 5 6H3C3 5.9 3 4 4.2 2.6ZM10 1.3L9.3 3.2C8.6 2.9 7.5 2.9 6.7 3.2L6 1.3C7.2 0.9 8.8 0.9 10 1.3Z" />
    </Svg>
  );
};
