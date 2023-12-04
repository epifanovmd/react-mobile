import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SeatPassengerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 18.9991H15V20.9991H9C6.24 20.9991 4 18.7591 4 15.9991V6.99914H6V15.9991C6 17.6591 7.34 18.9991 9 18.9991ZM10.42 5.40914C11.2 4.62914 11.2 3.35914 10.42 2.57914C9.64 1.79914 8.37 1.79914 7.59 2.57914C6.81 3.35914 6.81 4.62914 7.59 5.40914C8.37 6.19914 9.63 6.19914 10.42 5.40914ZM11.5 8.99914C11.5 7.89914 10.6 6.99914 9.5 6.99914H9C7.9 6.99914 7 7.89914 7 8.99914V14.9991C7 16.6591 8.34 17.9991 10 17.9991H15.07L18.57 21.4991L20 20.0691L14.93 14.9991H11.5V8.99914Z" />
    </Svg>
  );
};
