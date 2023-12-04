import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NfcSearchVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 12C19 12 21 14 21 16.5C21 17.38 20.76 18.21 20.32 18.9L23.4 22L22 23.39L18.89 20.32C18.2 20.75 17.38 21 16.5 21C14 21 12 19 12 16.5C12 14 14 12 16.5 12ZM16.5 14C15.837 14 15.2011 14.2634 14.7322 14.7322C14.2634 15.2011 14 15.837 14 16.5C14 17.163 14.2634 17.7989 14.7322 18.2678C15.2011 18.7366 15.837 19 16.5 19C17.89 19 19 17.88 19 16.5C19 15.837 18.7366 15.2011 18.2678 14.7322C17.7989 14.2634 17.163 14 16.5 14ZM18 6V10.18C17.33 10 16.66 9.97 16 10V8H13V10.28L13.53 10.72C12.34 11.33 11.35 12.3 10.72 13.53C10.28 13.17 10 12.62 10 12C10 11.26 10.41 10.62 11 10.28V8C11 7.46957 11.2107 6.96086 11.5858 6.58579C11.9609 6.21071 12.4696 6 13 6H18ZM6 18V6H8H10V8H8V16H10C9.96 16.68 10 17.35 10.17 18H6ZM20 4H4V20H11C11.53 20.8 12.21 21.5 13.03 22H4C2.89 22 2 21.1 2 20V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V13.04C21.5 12.24 20.82 11.54 20 11V4Z" />
    </Svg>
  );
};
