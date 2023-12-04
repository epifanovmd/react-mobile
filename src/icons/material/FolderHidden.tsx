import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderHiddenIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 4V8H6V4H9ZM4 16V13H2V16H4ZM2 12H4V9H2V12ZM18 8H22C22 6.89 21.1 6 20 6H18V8ZM22 13H20V16H22V13ZM20 9V12H22V9H20ZM9 20V18H6V20H9ZM5 18H4V17H2V18C2 19.11 2.9 20 4 20H5V18ZM20 17V18H18V20H20C21.11 20 22 19.11 22 18V17H20ZM4 8H5V4H4C2.89 4 2 4.89 2 6V8H4ZM17 18H14V20H17V18ZM13 18H10V20H13V18ZM17 6H14V8H17V6ZM10 8H13V6H12L10 4V8Z" />
    </Svg>
  );
};
