import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GridOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M0 2.77L1.28 1.5L22.5 22.72L21.23 24L19.23 22H4C2.92 22 2 21.1 2 20V4.77L0 2.77ZM10 4V7.68L8 5.68V4H6.32L4.32 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V19.7L20 17.7V16H18.32L16.32 14H20V10H16V13.68L14 11.68V10H12.32L10.32 8H14V4H10ZM16 4V8H20V4H16ZM16 20H17.23L16 18.77V20ZM4 8H5.23L4 6.77V8ZM10 14H11.23L10 12.77V14ZM14 20V16.77L13.23 16H10V20H14ZM8 20V16H4V20H8ZM8 14V10.77L7.23 10H4V14H8Z" />
    </Svg>
  );
};
