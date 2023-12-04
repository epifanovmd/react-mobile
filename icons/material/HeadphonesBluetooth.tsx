import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HeadphonesBluetoothIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 6C6.4087 6 4.88258 6.63214 3.75736 7.75736C2.63214 8.88258 2 10.4087 2 12V16.8C2 17.46 2.54 18 3.2 18H6V14H4V12C4 10.9391 4.42143 9.92172 5.17157 9.17157C5.92172 8.42143 6.93913 8 8 8C9.06087 8 10.0783 8.42143 10.8284 9.17157C11.5786 9.92172 12 10.9391 12 12V14H10V18H12.8C13.1183 18 13.4235 17.8736 13.6485 17.6485C13.8736 17.4235 14 17.1183 14 16.8V12C14 10.4087 13.3679 8.88258 12.2426 7.75736C11.1174 6.63214 9.5913 6 8 6ZM19 7V10.79L16.71 8.5L16 9.21L18.79 12L16 14.79L16.71 15.5L19 13.21V17H19.5L22.35 14.14L20.21 12L22.35 9.85L19.5 7H19ZM20 8.91L20.94 9.85L20 10.79V8.91ZM20 13.21L20.94 14.14L20 15.08V13.21Z" />
    </Svg>
  );
};
