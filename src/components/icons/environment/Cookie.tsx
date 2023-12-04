import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CookieIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M12.1521 4.08723C12.1513 3.71959 12.1001 3.3538 12 3C16.9683 3.00545 20.9944 7.03979 21 12C21.0161 16.9625 16.9705 20.9835 12 20.9997C7.02946 21.0158 3.01615 16.963 3 12.0005C4.11168 12.2363 5.27038 11.9981 6.1499 11.2795C7.0562 10.5452 7.5789 9.43935 7.5702 8.27407C7.56959 8.01195 7.5461 7.75072 7.5 7.49268C8.51784 7.89624 9.67043 7.76409 10.5708 7.14162C11.5696 6.44537 12.161 5.3034 12.1521 4.08723Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.00195 7.002V7H3V7.00195L3.00195 7.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.00195 3.002V3H8V3.00195L8.00195 3.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.00195 3.002V3H4V3.00195L4.00195 3.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.002 17.002V17H10V17.002L10.002 17.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.002 15.002V15H15V15.002L15.002 15.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.002 12.002V12H11V12.002L11.002 12.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.002 10.002V10H16V10.002L16.002 10.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.00195 7.002V7H3V7.00195L3.00195 7.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.00195 3.002V3H8V3.00195L8.00195 3.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.00195 3.002V3H4V3.00195L4.00195 3.002Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
