import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PencilOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.66 2C18.4 2 18.16 2.09 17.97 2.28L16.13 4.13L19.88 7.88L21.72 6.03C22.11 5.64 22.11 5 21.72 4.63L19.38 2.28C19.18 2.09 18.91 2 18.66 2ZM3.28 4L2 5.28L8.5 11.75L4 16.25V20H7.75L12.25 15.5L18.72 22L20 20.72L13.5 14.25L9.75 10.5L3.28 4ZM15.06 5.19L11.03 9.22L14.78 12.97L18.81 8.94L15.06 5.19Z" />
    </Svg>
  );
};
