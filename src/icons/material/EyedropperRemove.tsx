import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyedropperRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.35 11.7197L17.22 13.8497L15.81 12.4297L8.09996 20.1397L3.49996 21.9997L1.99996 20.4997L3.85996 15.8997L11.57 8.18973L10.15 6.77973L12.28 4.64973L19.35 11.7197ZM16.76 2.99973C17.93 1.82973 19.83 1.82973 21 2.99973C22.17 4.16973 22.17 6.06973 21 7.23973L19.08 9.15973L14.84 4.91973L16.76 2.99973ZM5.55996 17.0297L4.49996 19.4997L6.96996 18.4397L14.4 10.9997L13 9.59973L5.55996 17.0297ZM8.53996 2.87973L6.40996 4.99973L8.53996 7.11973L7.11996 8.53973L4.99996 6.40973L2.87996 8.53973L1.45996 7.11973L3.58996 4.99973L1.45996 2.87973L2.87996 1.46973L4.99996 3.58973L7.11996 1.46973L8.53996 2.87973Z" />
    </Svg>
  );
};
