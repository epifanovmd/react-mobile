import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GestureTwoDoubleTapIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 15.14V21.5C18.97 22.32 18.32 22.97 17.5 23H11C10.62 23 10.26 22.85 10 22.57L5.1 18.37L5.84 17.6C6.03 17.39 6.3 17.28 6.58 17.28H6.8L10 19V9C10 8.73478 10.1054 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8C11.2652 8 11.5196 8.10536 11.7071 8.29289C11.8946 8.48043 12 8.73478 12 9V7C12 6.73478 12.1054 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7V12L18.15 13.84C18.66 14.07 19 14.58 19 15.14ZM13 3C14.0609 3 15.0783 3.42143 15.8284 4.17157C16.5786 4.92172 17 5.93913 17 7C17 8.5 16.2 9.77 15 10.46V9.24C15.61 8.69 16 7.89 16 7C16 6.20435 15.6839 5.44129 15.1213 4.87868C14.5587 4.31607 13.7956 4 13 4C11.65 4 10.5 4.9 10.13 6.13C8.9 6.5 8 7.65 8 9C8 9.89 8.39 10.69 9 11.24V12.46C7.8 11.77 7 10.5 7 9C7 7.38 7.97 6 9.35 5.35C10 3.97 11.38 3 13 3ZM13 1C14.5913 1 16.1174 1.63214 17.2426 2.75736C18.3679 3.88258 19 5.4087 19 7C19 9.06 17.96 10.88 16.38 11.96L15.26 11.46C16.89 10.64 18 8.95 18 7C18 5.67392 17.4732 4.40215 16.5355 3.46447C15.5979 2.52678 14.3261 2 13 2C11.11 2 9.46 3.05 8.61 4.61C7.05 5.46 6 7.11 6 9C6 11.05 7.23 12.81 9 13.58V14.66C6.67 13.83 5 11.61 5 9C5 6.83 6.15 4.93 7.88 3.88C8.93 2.15 10.83 1 13 1Z" />
    </Svg>
  );
};
