import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RhombusSplitIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.0001 2C11.5001 2 11.0001 2.19 10.5901 2.59L7.29006 5.88L12.0001 10.58L16.7101 5.88L13.4101 2.59C13.0001 2.19 12.5001 2 12.0001 2ZM5.88006 7.29L2.59006 10.59C1.80006 11.37 1.80006 12.63 2.59006 13.41L5.88006 16.71L10.5801 12L5.88006 7.29ZM18.1201 7.29L13.4201 12L18.1201 16.71L21.4101 13.41C22.2001 12.63 22.2001 11.37 21.4101 10.59L18.1201 7.29ZM12.0001 13.42L7.29006 18.12L10.5901 21.41C11.3701 22.2 12.6301 22.2 13.4101 21.41L16.7101 18.12L12.0001 13.42Z" />
    </Svg>
  );
};
