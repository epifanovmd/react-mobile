import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ShieldOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 4.27L2.28 3L20.5 21.22L19.23 22.5L17 20.25C15.57 21.57 13.87 22.54 12 23C6.84 21.74 3 16.55 3 11V6.27L1 4.27ZM12 1L21 5V11C21 13.28 20.35 15.5 19.23 17.41L5.65 3.82L12 1Z" />
    </Svg>
  );
};
