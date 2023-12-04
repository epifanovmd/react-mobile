import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToyBrickRemoveOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 6V5C19 3.9 18.1 3 17 3H15C13.9 3 13 3.9 13 5V6H11V5C11 3.9 10.1 3 9 3H7C5.9 3 5 3.9 5 5V6H3V20H14V18H5V8H19V13H21V6H19ZM17.88 15.46L20 17.59L22.12 15.47L23.54 16.88L21.41 19L23.54 21.12L22.12 22.54L20 20.41L17.88 22.54L16.46 21.12L18.59 19L16.47 16.88" />
    </Svg>
  );
};
