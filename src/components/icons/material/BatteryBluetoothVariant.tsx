import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BatteryBluetoothVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 2V4H7.33C6.97726 4 6.63897 4.14012 6.38955 4.38955C6.14012 4.63897 6 4.97726 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.0227 22 17.361 21.8599 17.6105 21.6105C17.8599 21.361 18 21.0227 18 20.67V5.33C18 4.6 17.4 4 16.67 4H15V2H9ZM11.83 8H12.33L15.18 10.85L13.04 13L15.17 15.14L12.33 18H11.83V14.21L9.54 16.5L8.83 15.79L11.62 13L8.83 10.21L9.54 9.5L11.83 11.79V8ZM12.83 9.91V11.79L13.77 10.85L12.83 9.91ZM12.83 14.21V16.08L13.77 15.14L12.83 14.21Z" />
    </Svg>
  );
};
