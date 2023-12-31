import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiceMultipleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 8C13.45 8 13 7.55 13 7C13 6.45 13.45 6 14 6C14.55 6 15 6.45 15 7C15 7.55 14.55 8 14 8ZM12 12V19H5V12H12ZM12.78 10H4.22C3.55 10 3 10.55 3 11.22V19.78C3 20.45 3.55 21 4.22 21H12.78C13.45 21 14 20.45 14 19.78V11.22C14 10.55 13.45 10 12.78 10ZM19.78 3H11.22C10.55 3 10 3.55 10 4.22V8H12V5H19V12H16V14H19.78C20.45 14 21 13.45 21 12.78V4.22C21 3.55 20.45 3 19.78 3ZM17 8C16.45 8 16 7.55 16 7C16 6.45 16.45 6 17 6C17.55 6 18 6.45 18 7C18 7.55 17.55 8 17 8ZM17 11C16.45 11 16 10.55 16 10C16 9.45 16.45 9 17 9C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11ZM7 15C6.45 15 6 14.55 6 14C6 13.45 6.45 13 7 13C7.55 13 8 13.45 8 14C8 14.55 7.55 15 7 15ZM10 18C9.45 18 9 17.55 9 17C9 16.45 9.45 16 10 16C10.55 16 11 16.45 11 17C11 17.55 10.55 18 10 18Z" />
    </Svg>
  );
};
