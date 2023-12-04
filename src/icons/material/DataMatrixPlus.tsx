import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DataMatrixPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 2V4H14V2H16ZM12 2H10V6H12V2ZM10 14H8V16H10V14ZM16 4V6H14V8H18V4H16ZM8 2H6V6H8V2ZM20 2H18V4H20V2ZM13.8 22H2V2H4V6H6V12H4V14H6V16H8V18H10V20H12V18H10V16H12V12H8V8H12V10H14V12H16V10H18V12H22V13.8C21.1 13.3 20.1 13 19 13C17.8 13 16.6 13.4 15.7 14H14V15.7C13.4 16.6 13 17.8 13 19C13 20.1 13.3 21.1 13.8 22ZM6 18H4V20H6V18ZM22 8H18V10H22V8ZM22 6V4H20V6H22ZM18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" />
    </Svg>
  );
};
