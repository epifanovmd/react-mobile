import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodAppleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 9.99956C22 12.9996 17 21.9996 15 21.9996C13 21.9996 13 20.9996 12 20.9996C11 20.9996 11 21.9996 9.00002 21.9996C7.00002 21.9996 2.00002 12.9996 4.00002 9.99956C6.00002 6.99956 9.00002 6.99956 11 7.99956V4.99956C5.38002 8.06956 4.11002 3.77956 4.11002 3.77956C4.11002 3.77956 6.77002 0.189562 11 4.99956V2.99956H13V7.99956C15 6.99956 18 6.99956 20 9.99956Z" />
    </Svg>
  );
};
