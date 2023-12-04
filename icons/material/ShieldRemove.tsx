import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ShieldRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.43 19L21.5 21.11L20.12 22.5L18.03 20.41L15.91 22.53L14.5 21.11L16.61 19L14.5 16.86L15.88 15.47L18 17.59L20.12 15.47L21.55 16.9L19.43 19ZM12 1L21 5V11C21 11.9 20.9 12.78 20.71 13.65C19.9 13.23 19 13 18 13C16.4087 13 14.8826 13.6321 13.7574 14.7574C12.6321 15.8826 12 17.4087 12 19C12 20.36 12.45 21.62 13.22 22.62L12 23C6.84 21.74 3 16.55 3 11V5L12 1Z" />
    </Svg>
  );
};
