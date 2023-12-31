import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BasketMinusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 18V20H15V18H23ZM23 10L22.96 10.29L22 13.8C21.11 13.29 20.09 13 19 13C15.69 13 13 15.69 13 19C13 19.7 13.13 20.37 13.35 21H5.5C4.72 21 4.04 20.55 3.71 19.9L1.1 10.44L1 10C1 9.45 1.45 9 2 9H6.58L11.18 2.43C11.36 2.17 11.66 2 12 2C12.34 2 12.65 2.17 12.83 2.44L17.42 9H22C22.55 9 23 9.45 23 10ZM14 15C14 13.9 13.11 13 12 13C10.89 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.11 14 15ZM15 9L12 4.74L9 9H15Z" />
    </Svg>
  );
};
