import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DonkeyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.34 10.35L21.27 10.28L21.18 10.19L18 7V6C18 5.86739 17.9473 5.74021 17.8536 5.64645C17.7598 5.55268 17.6326 5.5 17.5 5.5C17.36 5.5 17.22 5.56 17.13 5.66L13.46 9H7.00002C6.32002 9 5.69002 9.35 5.32002 9.92L2.62002 12.59C2.29002 13.04 2.39002 13.66 2.84002 14C3.18002 14.24 3.65002 14.25 4.00002 14L5.00002 13.07V19H8.00002V15H13V19H16V13.83C16 13.3 16.21 12.79 16.59 12.42L18 11L20 12C20.15 12.08 20.32 12.13 20.5 12.13C21.1 12.11 21.59 11.61 21.58 11C21.57 10.76 21.5 10.53 21.34 10.35Z" />
    </Svg>
  );
};
