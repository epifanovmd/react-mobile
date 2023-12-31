import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectionEllipseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.34992 20.2499L7.55992 18.6599C8.41992 19.2299 9.38992 19.6399 10.4299 19.8499L10.1599 21.8299C8.76992 21.5699 7.49992 20.9999 6.34992 20.2499ZM16.4299 18.6599L17.6399 20.2599C16.4999 21.0299 15.2299 21.5699 13.8399 21.8299L13.5699 19.8499C14.6099 19.6399 15.5699 19.2299 16.4299 18.6599ZM19.8399 13.5899L21.8299 13.8599C21.5699 15.2499 20.9999 16.5399 20.2399 17.6599L18.6499 16.4499C19.2199 15.5999 19.6299 14.6299 19.8399 13.5899ZM2.16992 13.8399L4.14992 13.5699C4.35992 14.6099 4.76992 15.5799 5.33992 16.4399L3.74992 17.6499C2.99992 16.4999 2.42992 15.2299 2.16992 13.8399ZM18.6599 7.55992L20.2499 6.34992C21.0299 7.49992 21.5799 8.77992 21.8299 10.1799L19.8499 10.4499C19.6399 9.39992 19.2299 8.41992 18.6599 7.55992ZM13.5699 4.14992L13.8399 2.16992C15.2299 2.42992 16.4999 2.99992 17.6499 3.74992L16.4399 5.33992C15.5799 4.76992 14.6099 4.35992 13.5699 4.14992ZM7.55992 5.33992L6.34992 3.74992C7.49992 2.99992 8.76992 2.42992 10.1599 2.16992L10.4299 4.14992C9.38992 4.35992 8.41992 4.76992 7.55992 5.33992ZM4.14992 10.4299L2.16992 10.1599C2.42992 8.76992 2.99992 7.49992 3.74992 6.34992L5.33992 7.55992C4.76992 8.41992 4.35992 9.38992 4.14992 10.4299Z" />
    </Svg>
  );
};
