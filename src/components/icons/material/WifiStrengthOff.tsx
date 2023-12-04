import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WifiStrengthOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3.26988 1.43945L1.99988 2.71945L4.04988 4.76945C2.74988 5.36945 1.49988 6.10945 0.379883 6.99945C4.40988 12.0595 11.9999 21.4995 11.9999 21.4995L15.9099 16.6295L19.2299 19.9495L20.4999 18.6795L3.26988 1.43945ZM11.9999 2.99945C10.5999 2.99945 9.20988 3.16945 7.85988 3.49945L18.1799 13.8095C19.9999 11.4995 22.0499 8.99945 23.6499 6.99945C20.3199 4.40945 16.2199 2.99945 11.9999 2.99945Z" />
    </Svg>
  );
};
