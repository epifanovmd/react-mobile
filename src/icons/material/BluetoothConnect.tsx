import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BluetoothConnectIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 10L17 12L19 14L21 12L19 10ZM14.88 16.29L13 18.17V14.41L14.88 16.29ZM13 5.83L14.88 7.71L13 9.58V5.83ZM17.71 7.71L12 2H11V9.58L6.41 5L5 6.41L10.59 12L5 17.58L6.41 19L11 14.41V22H12L17.71 16.29L13.41 12L17.71 7.71ZM7 12L5 10L3 12L5 14L7 12Z" />
    </Svg>
  );
};
