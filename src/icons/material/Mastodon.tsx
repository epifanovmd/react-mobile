import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MastodonIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.9399 14C20.6599 15.41 18.4999 16.96 15.9699 17.26C14.6599 17.41 13.3699 17.56 11.9999 17.5C9.74992 17.39 7.99992 16.96 7.99992 16.96V17.58C8.31992 19.8 10.2199 19.93 12.0299 20C13.8499 20.05 15.4699 19.54 15.4699 19.54L15.5499 21.19C15.5499 21.19 14.2699 21.87 11.9999 22C10.7499 22.07 9.18992 21.97 7.37992 21.5C3.45992 20.45 2.77992 16.26 2.67992 12L2.66992 8.57C2.66992 4.23 5.49992 2.96 5.49992 2.96C6.94992 2.3 9.40992 2 11.9699 2H12.0299C14.5899 2 17.0499 2.3 18.4999 2.96C18.4999 2.96 21.3299 4.23 21.3299 8.57C21.3299 8.57 21.3699 11.78 20.9399 14ZM17.9999 8.91C17.9999 7.83 17.6999 7 17.1499 6.35C16.5899 5.72 15.8499 5.39 14.9199 5.39C13.8599 5.39 13.0499 5.8 12.4999 6.62L11.9999 7.5L11.4999 6.62C10.9399 5.8 10.1399 5.39 9.06992 5.39C8.14992 5.39 7.40992 5.72 6.83992 6.35C6.28992 7 5.99992 7.83 5.99992 8.91V14.17H8.09992V9.06C8.09992 8 8.54992 7.44 9.45992 7.44C10.4599 7.44 10.9599 8.09 10.9599 9.37V12.16H13.0299V9.37C13.0299 8.09 13.5299 7.44 14.5399 7.44C15.4399 7.44 15.8899 8 15.8899 9.06V14.17H17.9999V8.91Z" />
    </Svg>
  );
};
