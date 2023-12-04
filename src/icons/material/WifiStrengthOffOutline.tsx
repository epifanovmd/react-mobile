import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrengthOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3.27 1.43945L2 2.71945L4.05 4.76945C2.75001 5.36945 1.5 6.10945 0.380005 6.99945C4.2 11.7995 8.14001 16.6695 12 21.4995L15.91 16.6295L19.23 19.9495L20.5 18.6795C14.87 13.0395 3.27 1.43945 3.27 1.43945ZM12 2.99945C10.6 2.99945 9.21 3.16945 7.86 3.49945L9.56001 5.18945C10.37 5.06945 11.18 4.99945 12 4.99945C15.07 4.99945 18.09 5.85945 20.71 7.44945L16.76 12.3795L18.18 13.7995C20.08 11.4295 22 8.99945 23.65 6.99945C20.32 4.40945 16.22 2.99945 12 2.99945ZM5.57 6.28945L14.5 15.2095L12 18.2995L3.27 7.43945C4 6.99945 4.78 6.60945 5.57 6.28945Z" />
    </Svg>
  );
};
