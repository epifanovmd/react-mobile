import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const VariableIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.4099 3C21.7999 5.71 22.3499 8.84 21.9999 12C21.7999 15.16 20.6999 18.29 18.8299 21L17.2999 20C18.9099 17.57 19.8499 14.8 19.9999 12C20.3399 9.2 19.8899 6.43 18.6999 4L20.4099 3ZM5.1699 3L6.6999 4C5.0899 6.43 4.1499 9.2 3.9999 12C3.6599 14.8 4.1199 17.57 5.2999 20L3.6099 21C2.2099 18.29 1.6499 15.17 1.9999 12C2.1999 8.84 3.2999 5.71 5.1699 3ZM12.0799 10.68L14.3999 7.45H16.9299L13.1499 12.45L15.3499 17.37H13.0899L11.7099 14L9.2799 17.33H6.7599L10.6599 12.21L8.5299 7.45H10.7999L12.0799 10.68Z" />
    </Svg>
  );
};
