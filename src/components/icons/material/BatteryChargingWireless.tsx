import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BatteryChargingWirelessIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 4H11V2H5V4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H13C13.2652 22 13.5196 21.8946 13.7071 21.7071C13.8946 21.5196 14 21.2652 14 21V5C14 4.73478 13.8946 4.48043 13.7071 4.29289C13.5196 4.10536 13.2652 4 13 4ZM20.07 4.93L18.66 6.34C21.79 9.46 21.79 14.53 18.66 17.66L20.07 19.07C23.97 15.17 23.97 8.84 20.07 4.93ZM17.24 7.76L15.83 9.17C17.39 10.73 17.39 13.26 15.83 14.83L17.24 16.24C19.58 13.9 19.58 10.1 17.24 7.76Z" />
    </Svg>
  );
};
