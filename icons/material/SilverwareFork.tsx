import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SilverwareForkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.11996 21.2903L3.70996 19.8803L13.36 10.2203L13.16 10.0003C12.38 9.23031 12.38 7.97031 13.16 7.19031L17.5 2.82031L18.43 3.74031L15.19 7.00031L16.15 7.94031L19.39 4.69031L20.31 5.61031L17.06 8.85031L18 9.81031L21.26 6.56031L22.18 7.50031L17.81 11.8403C17.03 12.6203 15.77 12.6203 15 11.8403L14.78 11.6403L5.11996 21.2903Z" />
    </Svg>
  );
};
