import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountCowboyHatOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 3.99999C18.4 3.99999 18 4.39999 18 4.99999V5.99999H16.5L15.1 2.99999C15 2.79999 14.9 2.59999 14.7 2.49999C14.2 1.99999 13.4 1.89999 12.7 2.19999L12 2.39999L11.3 2.09999C10.6 1.79999 9.8 1.89999 9.3 2.39999C9.1 2.59999 9 2.79999 8.9 2.99999L7.5 5.99999H6V4.99999C6 4.39999 5.6 3.99999 5 3.99999C4.4 3.99999 4 4.39999 4 4.99999V5.99999C4 7.09999 4.9 7.99999 6 7.99999H18C19.1 7.99999 20 7.09999 20 5.99999V4.99999C20 4.49999 19.6 3.99999 19 3.99999ZM4 22V19C4 16.33 9.33 15 12 15C14.67 15 20 16.33 20 19V22H4ZM18.1 20.1V19C18.1 18.36 14.97 16.9 12 16.9C9.03 16.9 5.9 18.36 5.9 19V20.1H18.1ZM16 8.99999V9.99999C16 12.21 14.21 14 12 14C9.79 14 8 12.21 8 9.99999V8.99999H10V9.99999C10 11.11 10.9 12 12 12C13.1 12 14 11.11 14 9.99999V8.99999H16Z" />
    </Svg>
  );
};
