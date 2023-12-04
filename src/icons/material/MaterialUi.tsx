import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MaterialUiIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 16.6109V15.3709L14 11.9109V7.23086L9 10.1209L4 7.23086V13.0009L3 13.5809L2 13.0009V5.00086L3.07 4.38086L9 7.81086L12.93 5.54086L14.93 4.38086L16 5.00086V13.0609L10.92 16.0009L14.97 18.3309L20 15.4309V11.0009L21 10.4209L22 11.0009V16.5809L14.97 20.6409L8 16.6109ZM22 9.75086L21 10.3309L20 9.75086V8.58086L21 8.00086L22 8.58086V9.75086Z" />
    </Svg>
  );
};
