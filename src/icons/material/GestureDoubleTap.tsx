import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GestureDoubleTapIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 9C10 8.73478 10.1054 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8C11.2652 8 11.5196 8.10536 11.7071 8.29289C11.8946 8.48043 12 8.73478 12 9V13.47L13.21 13.6L18.15 15.79C18.68 16.03 19 16.56 19 17.14V21.5C18.97 22.32 18.32 22.97 17.5 23H11C10.62 23 10.26 22.85 10 22.57L5.1 18.37L5.84 17.6C6.03 17.39 6.3 17.28 6.58 17.28H6.8L10 19V9ZM11 5C12.0609 5 13.0783 5.42143 13.8284 6.17157C14.5786 6.92172 15 7.93913 15 9C15 10.5 14.2 11.77 13 12.46V11.24C13.61 10.69 14 9.89 14 9C14 8.20435 13.6839 7.44129 13.1213 6.87868C12.5587 6.31607 11.7956 6 11 6C10.2044 6 9.44129 6.31607 8.87868 6.87868C8.31607 7.44129 8 8.20435 8 9C8 9.89 8.39 10.69 9 11.24V12.46C7.8 11.77 7 10.5 7 9C7 7.93913 7.42143 6.92172 8.17157 6.17157C8.92172 5.42143 9.93913 5 11 5ZM11 3C12.5913 3 14.1174 3.63214 15.2426 4.75736C16.3679 5.88258 17 7.4087 17 9C17 10.7 16.29 12.23 15.16 13.33L14.16 12.88C15.28 11.96 16 10.56 16 9C16 7.67392 15.4732 6.40215 14.5355 5.46447C13.5979 4.52678 12.3261 4 11 4C9.67392 4 8.40215 4.52678 7.46447 5.46447C6.52678 6.40215 6 7.67392 6 9C6 11.05 7.23 12.81 9 13.58V14.66C6.67 13.83 5 11.61 5 9C5 7.4087 5.63214 5.88258 6.75736 4.75736C7.88258 3.63214 9.4087 3 11 3Z" />
    </Svg>
  );
};
