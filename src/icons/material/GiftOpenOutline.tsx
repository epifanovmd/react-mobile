import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GiftOpenOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 10.8703L19.26 9.28033C19.5 9.07033 19.73 8.80033 19.9 8.50033C20.73 7.07033 20.24 5.23033 18.8 4.40033C17.94 3.90033 16.93 3.90033 16.08 4.26033L16.09 4.25033L15.21 4.64033L15.1 3.68033L15.09 3.69033C15 2.78033 14.47 1.90033 13.61 1.40033C12.17 0.57533 10.34 1.07033 9.5 2.50033C9.33 2.80033 9.22 3.13033 9.16 3.45033L6.41 1.87033C5.45 1.32033 4.23 1.64033 3.68 2.60033L2.18 5.20033C1.9 5.68033 2.07 6.29033 2.55 6.56033L4.28 7.56033L8.5 10.0003H2V20.0003C2 21.1103 2.9 22.0003 4 22.0003H20C21.11 22.0003 22 21.1103 22 20.0003V14.8703L22.73 13.6003C23.28 12.6403 22.96 11.4203 22 10.8703ZM16.44 6.50033C16.71 6.00033 17.33 5.86033 17.8 6.13033C18.28 6.41033 18.45 7.00033 18.17 7.50033C17.89 8.00033 17.28 8.14033 16.8 7.87033C16.33 7.59033 16.16 7.00033 16.44 6.50033ZM14.07 8.60033L21 12.6003L20 14.3303L13.07 10.3303L14.07 8.60033ZM11 20.0003H4V12.0003H11V20.0003ZM11.34 9.33033L4.41 5.33033L5.41 3.60033L12.34 7.60033L11.34 9.33033ZM11.61 4.87033C11.13 4.59033 10.97 4.00033 11.24 3.50033C11.5 3.00033 12.13 2.86033 12.61 3.13033C13.09 3.41033 13.25 4.00033 12.97 4.50033C12.7 5.00033 12.09 5.14033 11.61 4.87033ZM13 20.0003V12.6003L20 16.6403V20.0003H13Z" />
    </Svg>
  );
};
