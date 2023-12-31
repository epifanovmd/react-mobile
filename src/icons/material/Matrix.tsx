import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MatrixIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 2H6V4H4V20H6V22H2V2ZM20 4H18V2H22V22H18V20H20V4ZM9 5H10V10H11V11H8V10H9V6L8 6.5V5.5L9 5ZM15 13H16V18H17V19H14V18H15V14L14 14.5V13.5L15 13ZM9 13C10.1 13 11 14.34 11 16C11 17.66 10.1 19 9 19C7.9 19 7 17.66 7 16C7 14.34 7.9 13 9 13ZM9 14C8.45 14 8 14.9 8 16C8 17.1 8.45 18 9 18C9.55 18 10 17.1 10 16C10 14.9 9.55 14 9 14ZM15 5C16.1 5 17 6.34 17 8C17 9.66 16.1 11 15 11C13.9 11 13 9.66 13 8C13 6.34 13.9 5 15 5ZM15 6C14.45 6 14 6.9 14 8C14 9.1 14.45 10 15 10C15.55 10 16 9.1 16 8C16 6.9 15.55 6 15 6Z" />
    </Svg>
  );
};
