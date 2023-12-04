import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VideoWirelessIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 14.4995V10.9995C17 10.7342 16.8946 10.4799 16.7071 10.2923C16.5196 10.1048 16.2652 9.99945 16 9.99945H4C3.73478 9.99945 3.48043 10.1048 3.29289 10.2923C3.10536 10.4799 3 10.7342 3 10.9995V20.9995C3 21.2647 3.10536 21.519 3.29289 21.7066C3.48043 21.8941 3.73478 21.9995 4 21.9995H16C16.2652 21.9995 16.5196 21.8941 16.7071 21.7066C16.8946 21.519 17 21.2647 17 20.9995V17.4995L21 21.4995V10.4995L17 14.4995ZM3 3.85945L4.4 5.23945C7.5 2.18945 12.5 2.18945 15.6 5.23945L17 3.85945C13.14 0.0494533 6.87 0.0494533 3 3.85945ZM5.8 6.61945L7.2 7.99945C8.75 6.49945 11.25 6.49945 12.8 7.99945L14.2 6.61945C11.88 4.33945 8.12 4.33945 5.8 6.61945Z" />
    </Svg>
  );
};
