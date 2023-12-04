import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableKeyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.8 17C16.4 15.8 15.3 15 14 15C12.3 15 11 16.3 11 18C11 19.7 12.3 21 14 21C15.3 21 16.4 20.2 16.8 19H19V21H21V19H23V17H16.8ZM14 19C13.4 19 13 18.5 13 18C13 17.5 13.4 17 14 17C14.6 17 15 17.5 15 18C15 18.5 14.6 19 14 19ZM9 18H4V14H10V15C10.9 13.8 12.4 13 14 13C15.1 13 16.1 13.4 17 14H18V15H20V6C20 4.9 19.1 4 18 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H9.4C9.1 19.4 9 18.7 9 18ZM12 8H18V12H12V8ZM4 8H10V12H4V8Z" />
    </Svg>
  );
};
