import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GiftOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 6.00047H17.83C17.94 5.69047 18 5.35047 18 5.00047C18 3.34047 16.66 2.00047 15 2.00047C14 2.00047 13.12 2.50047 12.57 3.24047V3.23047L12 4.00047L11.43 3.23047V3.24047C10.88 2.50047 10 2.00047 9 2.00047C7.97 2.00047 7.06 2.50047 6.5 3.32047L8.03 4.83047C8.12 4.36047 8.5 4.00047 9 4.00047C9.55 4.00047 10 4.45047 10 5.00047C10 5.50047 9.64 5.88047 9.17 5.97047L13 9.80047V8.00047H21V10.0005H13.2L15.2 12.0005H20V16.8005L22 18.8005V12.0005C22.55 12.0005 23 11.5505 23 11.0005V8.00047C23 6.90047 22.11 6.00047 21 6.00047ZM15 6.00047C14.45 6.00047 14 5.55047 14 5.00047C14 4.45047 14.45 4.00047 15 4.00047C15.55 4.00047 16 4.45047 16 5.00047C16 5.55047 15.55 6.00047 15 6.00047ZM1.11 3.00047L4.11 6.00047H3C1.9 6.00047 1 6.90047 1 8.00047V11.0005C1 11.5505 1.45 12.0005 2 12.0005V20.0005C2 21.1105 2.9 22.0005 4 22.0005H20C20.03 22.0005 20.07 22.0005 20.1 22.0005L21.56 23.4505L22.83 22.1805L2.39 1.73047L1.11 3.00047ZM13 14.8905L18.11 20.0005H13V14.8905ZM11 12.8905V20.0005H4V12.0005H10.11L11 12.8905ZM8.11 10.0005H3V8.00047H6.11L8.11 10.0005Z" />
    </Svg>
  );
};
