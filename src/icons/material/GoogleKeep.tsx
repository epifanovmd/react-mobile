import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleKeepIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 2H20C21.11 2 22 2.9 22 4V17.33L17.33 22H4C2.9 22 2 21.11 2 20V4C2 2.9 2.9 2 4 2ZM17 17V20.25L20.25 17H17ZM10 19H14V18H15V13C16.21 12.09 17 10.64 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9C7 10.64 7.79 12.09 9 13V18H10V19ZM14 17H10V15H14V17ZM12 5C14.21 5 16 6.79 16 9C16 10.5 15.2 11.77 14 12.46V14H10V12.46C8.8 11.77 8 10.5 8 9C8 6.79 9.79 5 12 5Z" />
    </Svg>
  );
};
