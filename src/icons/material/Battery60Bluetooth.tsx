import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Battery60BluetoothIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 2V4H3.33C2.97726 4 2.63897 4.14012 2.38955 4.38955C2.14012 4.63897 2 4.97726 2 5.33V20.67C2 21.4 2.6 22 3.33 22H12.67C13.4 22 14 21.4 14 20.67V5.33C14 4.97726 13.8599 4.63897 13.6105 4.38955C13.361 4.14012 13.0227 4 12.67 4H11V2H5ZM4 6H12V12H4V6ZM19 8V11.79L16.71 9.5L16 10.21L18.79 13L16 15.79L16.71 16.5L19 14.21V18H19.5L22.35 15.14L20.21 13L22.35 10.85L19.5 8H19ZM20 9.91L20.94 10.85L20 11.79V9.91ZM20 14.21L20.94 15.14L20 16.08V14.21Z" />
    </Svg>
  );
};
